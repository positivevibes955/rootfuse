-- Add the missing 'action' column to waitlist_signups table
ALTER TABLE IF EXISTS public.waitlist_signups 
ADD COLUMN IF NOT EXISTS action TEXT DEFAULT 'get_started';

-- Add source_detail column if it doesn't exist
ALTER TABLE IF EXISTS public.waitlist_signups 
ADD COLUMN IF NOT EXISTS source_detail TEXT;

-- Update existing records to have the action column populated
UPDATE public.waitlist_signups 
SET action = 'get_started' 
WHERE action IS NULL;

-- Create index for the new action column
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_action ON public.waitlist_signups(action);

-- Enable realtime for the updated table
ALTER PUBLICATION supabase_realtime ADD TABLE waitlist_signups;
