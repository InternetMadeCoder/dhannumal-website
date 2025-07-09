import { PRIVACY_POLICY } from "./constants";

export default function PrivacyPolicy() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Privacy Policy</h1>
      <p className="text-center mb-6 text-gray-600 dark:text-gray-400">
        Last Updated: {PRIVACY_POLICY.lastUpdated}
      </p>

      {PRIVACY_POLICY.introduction.map((para, idx) => (
        <p key={idx} className="text-justify mb-4">
          {para}
        </p>
      ))}

      {PRIVACY_POLICY.sections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          {section.content.map((item, contentIdx) =>
            typeof item === "string" ? (
              <p key={contentIdx} className="text-justify mb-4">
                {item}
              </p>
            ) : (
              <div key={contentIdx} className="mb-4">
                <h3 className="font-medium mb-2">{item.subtitle}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {item.items.map((subItem, subIdx) => (
                    <li key={subIdx} className="text-justify">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>
      ))}

      <div className="border-t pt-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-2">
          <p>{PRIVACY_POLICY.contactInfo.name}</p>
          <p>{PRIVACY_POLICY.contactInfo.address}</p>
          <p>Email: {PRIVACY_POLICY.contactInfo.email}</p>
          <p>Phone: {PRIVACY_POLICY.contactInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
