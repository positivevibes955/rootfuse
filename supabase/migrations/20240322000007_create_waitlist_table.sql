-- Create waitlist_signups table for Rootfuse data
CREATE TABLE IF NOT EXISTS public.waitlist_signups (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    plan_level text,
    license_type text,
    state text,
    source text DEFAULT 'landing',
    phone text,
    text_alerts_enabled boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_email ON public.waitlist_signups(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at ON public.waitlist_signups(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_source ON public.waitlist_signups(source);

-- Enable realtime for the table
alter publication supabase_realtime add table waitlist_signups;

-- Insert test data for Rootfuse
INSERT INTO public.waitlist_signups (email, plan_level, license_type, state, source) 
VALUES ('wpcouponer@gmail.com', 'pro', 'cultivation', 'OK', 'test')
ON CONFLICT (email) DO NOTHING;
