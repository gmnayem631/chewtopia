import React from "react";

const FAQ = () => {
  return (
    <div>
      <details
        className="$$collapse bg-base-100 border border-base-300"
        name="my-accordion-det-1"
        open
      >
        <summary className="$$collapse-title font-semibold">
          How do I create an account?
        </summary>
        <div className="$$collapse-content text-sm">
          Click the &quot;Sign Up&quot; button in the top right corner and
          follow the registration process.
        </div>
      </details>
      <details
        className="$$collapse bg-base-100 border border-base-300"
        name="my-accordion-det-1"
      >
        <summary className="$$collapse-title font-semibold">
          I forgot my password. What should I do?
        </summary>
        <div className="$$collapse-content text-sm">
          Click on &quot;Forgot Password&quot; on the login page and follow the
          instructions sent to your email.
        </div>
      </details>
      <details
        className="$$collapse bg-base-100 border border-base-300"
        name="my-accordion-det-1"
      >
        <summary className="$$collapse-title font-semibold">
          How do I update my profile information?
        </summary>
        <div className="$$collapse-content text-sm">
          Go to &quot;My Account&quot; settings and select &quot;Edit
          Profile&quot; to make changes.
        </div>
      </details>
    </div>
  );
};

export default FAQ;
