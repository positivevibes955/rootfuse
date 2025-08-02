-- Waitlist and early access database setup

-- Set statement timeout to prevent connection timeouts
SET statement_timeout = '300s';

-- Waitlist signups table
CREATE TABLE IF NOT EXISTS public.waitlist_signups (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text NOT NULL,
    plan_level text,
    license_type text,
    state text,
    source text DEFAULT 'landing',
    phone text,
    text_alerts_enabled boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Early access purchases table
CREATE TABLE IF NOT EXISTS public.early_access_purchases (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text NOT NULL,
    stripe_payment_intent_id text,
    tier_name text NOT NULL,
    amount_paid numeric(10,2) NOT NULL,
    original_price numeric(10,2) NOT NULL,
    discount_percentage numeric(5,2) DEFAULT 50.00,
    status text DEFAULT 'pending',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    referrer_email text NOT NULL,
    referred_email text NOT NULL,
    referral_code text UNIQUE,
    status text DEFAULT 'pending',
    reward_amount numeric(10,2),
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS waitlist_signups_email_idx ON public.waitlist_signups(email);
CREATE INDEX IF NOT EXISTS waitlist_signups_created_at_idx ON public.waitlist_signups(created_at);
CREATE INDEX IF NOT EXISTS early_access_purchases_email_idx ON public.early_access_purchases(email);
CREATE INDEX IF NOT EXISTS early_access_purchases_stripe_id_idx ON public.early_access_purchases(stripe_payment_intent_id);
CREATE INDEX IF NOT EXISTS referrals_referrer_email_idx ON public.referrals(referrer_email);
CREATE INDEX IF NOT EXISTS referrals_code_idx ON public.referrals(referral_code);

-- Enable realtime for all tables
alter publication supabase_realtime add table waitlist_signups;
alter publication supabase_realtime add table early_access_purchases;
alter publication supabase_realtime add table referrals;

-- Create function to generate referral codes
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS text AS $$
DECLARE
    code text;
BEGIN
    code := upper(substring(md5(random()::text) from 1 for 8));
    RETURN code;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate referral codes
CREATE OR REPLACE FUNCTION auto_generate_referral_code()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.referral_code IS NULL THEN
        NEW.referral_code := generate_referral_code();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS auto_referral_code_trigger ON public.referrals;
CREATE TRIGGER auto_referral_code_trigger
    BEFORE INSERT ON public.referrals
    FOR EACH ROW
    EXECUTE FUNCTION auto_generate_referral_code();
