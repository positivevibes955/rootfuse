-- Add source_detail column to waitlist_signups table
ALTER TABLE public.waitlist_signups 
ADD COLUMN IF NOT EXISTS source_detail text;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_source_detail ON public.waitlist_signups(source_detail);
