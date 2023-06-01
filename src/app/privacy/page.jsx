import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-[#071927]  to-[#181818] flex flex-col text-white py-5">
      <div className="p-3 md:px-10">
        <h1 className="text-3xl font-bold my-3">Privacy Policy</h1>
        <p className="font-light my-3 max-w-xl">
          This Privacy Policy describes how we collect, use, and handle your
          personal information when you use our website and contact us through
          the messaging feature. We are committed to protecting your privacy and
          ensuring that your personal information is handled securely and
          responsibly.
        </p>
        <h1 className="text-xl font-bold my-3">Information We Collect</h1>
        <p className="font-light my-3 max-w-lg">
          When you use the contact form on our website, we may collect the
          following information:
        </p>
        <ul className="p-1">
          <li className="list-disc mx-5">Your name</li>
          <li className="list-disc mx-5">Your email address</li>
          <li className="list-disc mx-5">Your message</li>
        </ul>
        <h1 className="text-xl font-bold my-3">How We Use Your Information</h1>
        <p className="font-light my-3 max-w-lg">
          We use the information you provide to us through the contact form to
          respond to your inquiries and communicate with you. We will not use
          your personal information for any other purposes without your consent.
        </p>
        <h1 className="text-xl font-bold my-3">Data Storage and Security</h1>
        <p className="font-light my-3 max-w-lg">
          We take appropriate measures to ensure that your personal information
          is stored securely and protected against unauthorized access,
          alteration, disclosure, or destruction. We use industry-standard
          security measures to protect your information during transmission and
          once we receive it.
        </p>
        <h1 className="text-xl font-bold my-3">Third-Party Disclosure</h1>
        <p className="font-light my-3 max-w-lg">
          We do not sell, trade, or transfer your personal information to third
          parties unless we have your consent or are required by law to do so.
        </p>
        <h1 className="text-xl font-bold my-3">Cookies</h1>
        <p className="font-light my-3 max-w-lg">
          We may use cookies on our website to improve your browsing experience.
          You have the option to disable cookies in your browser settings if you
          prefer not to have them stored on your device.
        </p>
        <h1 className="text-xl font-bold my-3">
          Links to Third-Party Websites
        </h1>
        <p className="font-light my-3 max-w-lg">
          Our website may contain links to third-party websites. We have no
          control over the content or practices of these websites, and we are
          not responsible for their privacy policies or practices. We encourage
          you to review the privacy policies of these third-party websites
          before providing any personal information.
        </p>
        <h1 className="text-xl font-bold my-3">
          Changes to this Privacy Policy
        </h1>
        <p className="font-light my-3 max-w-lg">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the updated Privacy Policy will take
          effect immediately upon posting. We encourage you to review this
          Privacy Policy periodically for any updates or changes.
        </p>
        <h1 className="text-xl font-bold my-3">Contact Us</h1>
        <p className="font-light my-3 max-w-lg">
          If you have any questions or concerns about our Privacy Policy or the
          handling of your personal information, please
          <a href="mailto:adam.honvedo@gmail.com?subject = Feedback&body = Message" className="px-1 font-extrabold underline">
             contact me 
          </a>
          for further assistance.
        </p>
      </div>
    </div>
  );
};

export default page;
