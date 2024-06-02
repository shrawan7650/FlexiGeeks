import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="max-w-6xl mx-auto p-3">
      <div class="privacy-policy bg-gray-100 rounded-2xl p-10">
        <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Information We Collect</h2>
          <ul class="list-disc ml-8 mb-4">
            <li>
              Personal Information: This includes your name, email address,
              phone number, and any other information you voluntarily provide to
              us.
            </li>
            <li>
              Usage Information: We collect data about how you interact with our
              website, such as your IP address, browser type, device
              information, pages visited, and timestamps.
            </li>
            <li>
              Cookies and Similar Technologies: We use cookies, web beacons, and
              other tracking technologies to enhance your experience and gather
              information about your preferences and activities on our website.
            </li>
          </ul>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2">How We Use Your Information</h2>
          <p class="mb-4">
            We use the information we collect for the following purposes:
          </p>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Information Disclosure</h2>
          <p class="mb-4">
            We may share your information with third parties in the following
            circumstances:
          </p>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Data Security</h2>
          <p class="mb-4">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p class="mb-4">
            We may update this Privacy Policy from time to time by posting the
            revised version on our website.
          </p>
        </section>
        <section>
          <h2 class="text-2xl font-bold mb-2">Contact Us</h2>
          <p class="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our handling of your information, please contact
            us at <Link className="text-blue-600" to="mailto:flexi.geeks001@gmail.com">flexi.geeks001@gmail.com</Link>.
          </p>
          <p class="mb-4">Thank you for trusting us with your information.</p>
          <p>FlexiGeeks</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
