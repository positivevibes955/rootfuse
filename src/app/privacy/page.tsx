import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-digital text-dashboard-text mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-dashboard-text/80 font-mono">
            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when
                you create an account, join our waitlist, make a purchase, or
                contact us for support.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email address and contact information</li>
                <li>
                  Business information (license type, state, plan preferences)
                </li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and improve our services</li>
                <li>
                  To communicate with you about your account and our services
                </li>
                <li>To process payments and transactions</li>
                <li>
                  To send you marketing communications (with your consent)
                </li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except as described in this policy.
                We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. All payment processing is handled
                securely through Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                <strong>Email:</strong> privacy@rootfuse.com
                <br />
                <strong>Address:</strong> [Your Business Address]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-digital text-dashboard-text mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
              <p className="mt-4">
                <strong>Last Updated:</strong> January 1, 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
