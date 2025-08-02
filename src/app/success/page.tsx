import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-dashboard-bg p-4">
        <Card className="w-full max-w-md bg-dashboard-bg border-dashboard-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-dashboard-text font-digital">
              Payment Completed Successfully!
            </CardTitle>
            <CardDescription className="text-dashboard-text/80 font-mono">
              Thank you for your purchase. We're excited to work with you and
              will contact you at launch.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="bg-dashboard-border/10 rounded-lg p-4 text-center">
              <p className="text-dashboard-text font-mono mb-2">
                🎉 <strong>Welcome to Rootfuse!</strong> We're thrilled to have
                you on board.
              </p>
              <p className="text-dashboard-text/80 font-mono text-sm mb-3">
                Our team will contact you directly when we launch to get you set
                up and running. We're excited to work with you and help grow
                your business.
              </p>
              <p className="text-dashboard-text/80 font-mono text-sm">
                Your founder pricing is locked in and guaranteed for life.
              </p>
            </div>
            <p className="text-center text-dashboard-text/70 font-mono text-sm">
              You will receive a confirmation email shortly with your purchase
              details. We'll be in touch soon with launch updates and next
              steps.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                className="border-dashboard-border text-dashboard-text hover:bg-dashboard-border"
              >
                <Link href="/dashboard">Access Dashboard</Link>
              </Button>
              <Button
                asChild
                className="bg-dashboard-text text-dashboard-bg hover:bg-dashboard-border"
              >
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
