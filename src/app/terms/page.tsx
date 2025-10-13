export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="heading-1 text-foreground mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            Effective Date: October 13, 2025
          </p>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using the services of Mad Emu Pty Ltd (ABN 00 000 000 000), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">2. Equipment Rental Terms</h2>
            <h3 className="text-lg font-medium mb-2">2.1 Rental Period</h3>
            <p className="text-muted-foreground mb-4">
              The service period begins on the agreed mobilisation date and ends on the completion or demobilisation date set out in the relevant proposal or contract. Extensions or variations must be approved in writing in advance.
            </p>
            
            <h3 className="text-lg font-medium mb-2">2.2 Rental Rates</h3>
            <p className="text-muted-foreground mb-4">
              Rates and fees are as quoted in our proposals, service level agreements, or purchase orders. We reserve the right to modify rates with reasonable notice if scope, duration, or compliance requirements change.
            </p>
            
            <h3 className="text-lg font-medium mb-2">2.3 Payment Terms</h3>
            <p className="text-muted-foreground mb-4">
              Payment is due in accordance with the agreed terms on invoices or frameworks. Late payments may incur additional charges or suspension of services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">3. Customer Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a customer, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Use equipment only for its intended purpose</li>
              <li>Operate equipment safely and in compliance with all laws</li>
              <li>Ensure operators are properly qualified and trained</li>
              <li>Maintain equipment in good condition during the rental period</li>
              <li>Report any damage or malfunction immediately</li>
              <li>Return equipment in the same condition as received (normal wear excepted)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">4. Insurance and Liability</h2>
            <h3 className="text-lg font-medium mb-2">4.1 Insurance Coverage</h3>
            <p className="text-muted-foreground mb-4">
              Basic insurance is included with all rentals. Additional coverage options are available upon request.
            </p>
            
            <h3 className="text-lg font-medium mb-2">4.2 Customer Liability</h3>
            <p className="text-muted-foreground mb-4">
              Clients are liable for any damage, loss, or theft of supplied plant, equipment or materials during the service period, subject to the terms of the insurance coverage.
            </p>
            
            <h3 className="text-lg font-medium mb-2">4.3 Indemnification</h3>
            <p className="text-muted-foreground mb-4">
              You agree to indemnify and hold Mad Emu harmless from any claims arising from your use of our services, plant, equipment, PPE or consumables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">5. Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4">
              Cancellations must be made at least 24 hours before the scheduled delivery time. Late cancellations may incur charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">6. Delivery and Collection</h2>
            <p className="text-muted-foreground mb-4">
              We provide delivery, mobilisation, logistics and collection services as agreed. Access to the delivery location must be safe and suitable for our personnel and vehicles. Additional charges may apply for difficult access or remote locations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">7. Maintenance and Repairs</h2>
            <p className="text-muted-foreground mb-4">
              We are responsible for maintenance in accordance with the agreed scope. Clients must not attempt repairs or modifications without our written authorisation. Report all issues immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Our liability is limited to the value of fees paid for the specific services in question. We are not liable for indirect, consequential, or special damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of Queensland, Australia. Any disputes will be resolved in Queensland courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">10. Contact Information</h2>
            <div className="bg-muted p-6 rounded">
              <p className="text-muted-foreground">
              Mad Emu Pty Ltd<br />
                Email: legal@mad-emu.com.au<br />
                Phone: 1800 MADEMU (1800 623 368)<br />
                Address: Level 1, Sydney NSW 2000, Australia
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="heading-3 text-foreground mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
