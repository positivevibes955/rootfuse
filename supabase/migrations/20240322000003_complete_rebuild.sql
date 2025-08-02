DROP TABLE IF EXISTS waitlist_signups CASCADE;

CREATE TABLE waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  plan_level TEXT,
  license_type TEXT,
  state TEXT,
  source TEXT DEFAULT 'landing',
  phone TEXT,
  text_alerts_enabled BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_waitlist_signups_email ON waitlist_signups(email);
CREATE INDEX idx_waitlist_signups_created_at ON waitlist_signups(created_at);

alter publication supabase_realtime add table waitlist_signups;

INSERT INTO waitlist_signups (email, plan_level, license_type, state, source) VALUES 
('test@example.com', 'starter', 'cultivation', 'OK', 'test');