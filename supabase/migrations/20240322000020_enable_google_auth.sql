-- Enable Google OAuth provider
INSERT INTO auth.providers (id, name, enabled) 
VALUES ('google', 'Google', true)
ON CONFLICT (id) DO UPDATE SET enabled = true;

-- Update site URL and additional redirect URLs
UPDATE auth.config 
SET 
  site_url = 'https://222b917f-6777-4dfa-9071-1dfc7094efaa.tempo.build',
  additional_redirect_urls = ARRAY['https://www.rootfuse.com', 'https://222b917f-6777-4dfa-9071-1dfc7094efaa.tempo.build']
WHERE parameter = 'SITE_URL';

-- Ensure email confirmations are enabled
UPDATE auth.config 
SET value = 'true'
WHERE parameter = 'ENABLE_CONFIRMATIONS';

-- Set custom SMTP settings if needed
UPDATE auth.config 
SET value = 'contact@rootfuse.com'
WHERE parameter = 'SMTP_SENDER_EMAIL';

UPDATE auth.config 
SET value = 'Rootfuse'
WHERE parameter = 'SMTP_SENDER_NAME';