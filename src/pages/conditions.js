import React from 'react';
import './conditions.css';

const Conditions = () => {
  return (
    <div className="conditions-container">
      <h1>Terms and Conditions</h1>
      <p>Effective Date: June 12, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by PayMan Fintech Solutions Pvt Ltd (“we”, “our”, or “us”), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section>
        <h2>2. Services Offered</h2>
        <p>
          PayMan provides financial technology services including but not limited to digital payments, financial management, and related technology solutions. The services may be subject to specific guidelines or rules.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>You must provide accurate and complete information when using our services.</li>
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          <li>You agree not to use our services for any unlawful or prohibited purpose.</li>
        </ul>
      </section>

      <section>
        <h2>4. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which explains how we collect, use, and disclose your information.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          All content, logos, trademarks, and data on this website are the property of PayMan Fintech Solutions Pvt Ltd and are protected by applicable intellectual property laws.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. All services are provided "as is" and "as available."
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to our services at any time, without notice, for conduct that we believe violates these Terms.
        </p>
      </section>

      <section>
        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. Continued use of our services after changes constitutes acceptance of those changes.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at: <br />
          <strong>Email:</strong> support@paymanfintech.com<br />
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
      </section>
    </div>
  );
};

export default Conditions;
