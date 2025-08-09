import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-digital text-dashboard-text mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8 text-dashboard-text/80 font-mono">
            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using Rootfuse (&quot;the Service&quot;), you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Description of Service
              </h2>
              <p className="mb-4">
                Rootfuse provides a comprehensive dashboard platform for
                cannabis operations, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Compliance and inventory management</li>
                <li>METRC integration and reporting</li>
                <li>CRM and sales dashboards</li>
                <li>AI-powered assistance and automation</li>
                <li>Multi-license operation support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                User Responsibilities
              </h2>
              <p className="mb-4">As a user of Rootfuse, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to reverse engineer or hack the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Payment Terms
              </h2>
              <p className="mb-4">For paid services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Payments are processed securely through Stripe</li>
                <li>
                  Subscription fees are billed monthly or annually as selected
                </li>
                <li>
                  Early access and founder rates are locked in for the lifetime
                  of the account
                </li>
                <li>
                  Refunds may be provided at our discretion within 30 days of
                  purchase
                </li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Compliance Disclaimer
              </h2>
              <p>
                While Rootfuse provides tools to assist with compliance, users
                are solely responsible for ensuring their operations comply with
                all applicable federal, state, and local laws and regulations.
                Rootfuse does not provide legal advice and users should consult
                with qualified legal counsel regarding compliance matters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Limitation of Liability
              </h2>
              <p>
                Rootfuse shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Termination
              </h2>
              <p>
                We may terminate or suspend your account and bar access to the
                service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days notice prior to any new terms
                taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
                <br />
                <strong>Email:</strong> legal@rootfuse.com
                <br />
                <strong>Address:</strong> [Your Business Address]
              </p>
            </section>

            <p className="mt-8 text-sm">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
