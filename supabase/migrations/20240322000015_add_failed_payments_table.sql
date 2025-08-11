CREATE TABLE IF NOT EXISTS failed_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  checkout_session_id UUID REFERENCES checkout_sessions(id),
  stripe_session_id TEXT,
  cart_items JSONB,
  total_amount DECIMAL(10,2),
  failure_reason TEXT,
  retry_count INTEGER DEFAULT 0,
  last_retry_at TIMESTAMP WITH TIME ZONE,
  follow_up_sent BOOLEAN DEFAULT FALSE,
  follow_up_sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_failed_payments_user_id ON failed_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_failed_payments_email ON failed_payments(email);
CREATE INDEX IF NOT EXISTS idx_failed_payments_checkout_session_id ON failed_payments(checkout_session_id);
CREATE INDEX IF NOT EXISTS idx_failed_payments_follow_up_sent ON failed_payments(follow_up_sent);

alter publication supabase_realtime add table failed_payments;