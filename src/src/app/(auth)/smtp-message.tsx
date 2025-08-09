import { ArrowUpRight, InfoIcon } from "lucide-react";
import Link from "next/link";

export function SmtpMessage() {
  return (
    <div className="bg-muted/30 px-4 py-2 border mt-4 rounded-md flex gap-3 opacity-70">
      <InfoIcon size={14} className="mt-0.5 text-muted-foreground" />
      <div className="flex flex-col gap-1">
        <small className="text-xs text-muted-foreground">
          Email delivery may be slower due to rate limits.
        </small>
        <div>
          <Link
            href="https://supabase.com/docs/guides/auth/auth-smtp"
            target="_blank"
            className="text-primary/40 hover:text-primary/60 flex items-center text-xs gap-1"
          >
            Configure SMTP <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
