-- Create coupon codes table
CREATE TABLE IF NOT EXISTS coupon_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10,2) NOT NULL,
  duration_months INTEGER,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  description TEXT
);

-- Insert the rf5050 coupon code
INSERT INTO coupon_codes (
  code,
  discount_type,
  discount_value,
  duration_months,
  max_uses,
  description
) VALUES (
  'rf5050',
  'percentage',
  50.00,
  6,
  1000,
  '50% off for 6 months - Limited time offer'
) ON CONFLICT (code) DO NOTHING;

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE coupon_codes;
