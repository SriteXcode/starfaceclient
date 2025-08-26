import React, { useState } from "react";
import {
  Shield,
  Cookie,
  FileText,
  Lock,
  RefreshCcw,
  FileCheck2,
  User,
  AlertTriangle,
  Eye
} from "lucide-react";

const TandQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const accordionItem = (id, title, Icon, content) => (
    <div className="border-b border-gray-700 py-2">
      <button
        onClick={() => toggleItem(id)}
        className="w-full text-left text-lg font-semibold text-red-400 flex justify-between items-center focus:outline-none"
      >
        <span className="flex items-center gap-2">
          <Icon size={20} className="text-red-400" />
          {title}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            openItem === id ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openItem === id ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-300 leading-relaxed space-y-3">{content}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
          Star Face India – Terms & Policies
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Explore our complete Terms & Conditions, Privacy, Refunds, Security, and more — all in one place.
        </p>

        <div className="bg-gray-800 border border-gray-700 shadow-lg rounded-2xl p-6 space-y-2">
          {accordionItem(
            1,
            "Terms & Conditions",
            FileText,
            <>
              <p>
                These Terms govern your use of our services across Entertainment, Education, and IT. By using our services, you agree to comply with these terms.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You must provide accurate and truthful information.</li>
                <li>You are responsible for maintaining confidentiality of your account.</li>
                <li>All users must comply with applicable laws and regulations.</li>
                <li>Intellectual property rights apply to all our content and materials.</li>
              </ul>
            </>
          )}

          {accordionItem(
            2,
            "Privacy Policy",
            Lock,
            <>
              <p>
                We collect personal data such as your name, email, phone, and payment details to provide and improve our services. Protecting your privacy and data security is our top priority.
              </p>
              <p>
                You have rights to access, correct, or request deletion of your personal data. Cookies and other tracking technologies may be used to personalize your experience.
              </p>
              <p>
                We follow strict data handling practices and comply with international privacy regulations wherever applicable.
              </p>
            </>
          )}

          {accordionItem(
            3,
            "Refund Policy",
            RefreshCcw,
            <>
              <p>Refunds are available under the following conditions:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Education: Refund within 14 days if less than 25% of content accessed.</li>
                <li>Entertainment: Refund within 7 days if unused.</li>
                <li>IT: Refund before service begins or if service fails to deliver.</li>
              </ul>
              <p className="text-sm text-gray-400">
                Refund requests must be sent to our support team with purchase details.
              </p>
            </>
          )}

          {accordionItem(
            4,
            "Content Policy",
            FileCheck2,
            <>
              <p>
                Users must ensure that content shared on our platform is respectful, accurate, and relevant.
              </p>
              <p className="font-semibold">Prohibited Content Includes:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Hate speech or abusive material.</li>
                <li>Spam or fraudulent activities.</li>
                <li>Illegal, harmful, or misleading content.</li>
              </ul>
            </>
          )}

          {accordionItem(
            5,
            "Data Protection Policy",
            Eye,
            <>
              <p>
                We follow strict data protection protocols to safeguard all personal and sensitive information.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Data is encrypted in transit and at rest.</li>
                <li>Regular audits and compliance checks are performed.</li>
                <li>We respond swiftly to any data breach or security incident.</li>
              </ul>
            </>
          )}

          {accordionItem(
            6,
            "Accessibility Policy",
            AlertTriangle,
            <>
              <p>
                We are committed to providing inclusive and accessible services that meet international accessibility standards (WCAG).
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>We design for users with visual, auditory, and physical disabilities.</li>
                <li>Accessibility feedback is welcomed and acted upon.</li>
              </ul>
            </>
          )}

          {accordionItem(
            7,
            "Security Policy",
            Shield,
            <>
              <p>
                We implement advanced security measures to protect your data and accounts.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Encryption, firewalls, and secure authentication systems.</li>
                <li>Employees receive regular security training.</li>
                <li>We have defined protocols for incident response.</li>
              </ul>
            </>
          )}

          {accordionItem(
            8,
            "Cookie Policy",
            Cookie,
            <>
              <p>
                Cookies are used to improve website performance, functionality, and personalization.
              </p>
              <p>
                You can manage cookie preferences through your browser settings at any time.
              </p>
            </>
          )}

          {accordionItem(
            9,
            "User Agreement",
            User,
            <>
              <p>
                By creating an account and using our services, you agree to comply with our terms and policies.
              </p>
              <p>
                Accounts may be suspended or terminated in case of violation of rules.
              </p>
            </>
          )}

          {accordionItem(
            10,
            "Company Liabilities",
            FileText,
            <>
              <p className="font-semibold">Our liabilities cover the following areas:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Contractual Liability:</b> Responsibilities under service agreements.</li>
                <li><b>Tort Liability:</b> Harm caused by negligence or misconduct.</li>
                <li><b>Statutory Liability:</b> Compliance with laws and regulations.</li>
                <li><b>Financial Liability:</b> Compensation for losses in defined cases.</li>
                <li><b>Cybersecurity Liability:</b> Safeguarding user data and systems.</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TandQ;
