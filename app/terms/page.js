import { TERMS_AND_CONDITIONS } from "./constants";

export default function Terms() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        Terms &amp; Conditions
      </h1>
      <ol className="list-decimal pl-6 space-y-3 text-justify">
        {TERMS_AND_CONDITIONS.map((term, idx) => (
          <li key={idx} className="leading-relaxed">
            {term}
          </li>
        ))}
      </ol>
    </div>
  );
}
