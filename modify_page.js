const fs = require('fs');

const filePath = 'src/app/[locale]/about/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const helper_func = `
function renderTrustSignal(signal: string | { text: string; link: string; link_text: string; suffix: string; } | undefined) {
  if (!signal) return null;
  if (typeof signal === "string") return signal;
  if (typeof signal === "object" && signal !== null) {
    return (
      <>
        {signal.text}{" "}
        <a href={signal.link} className="underline">
          {signal.link_text}
        </a>
        {signal.suffix}
      </>
    );
  }
  return null;
}

export default async function QuienesSomos`;

content = content.replace('export default async function QuienesSomos', helper_func);

const old_jsx = `                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>
                    {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>
                    {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[1]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🛡️</span>
                  <span>
                    {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.text}
                    {" "}
                    <a
                      href={dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.link}
                      className="underline"
                    >
                      {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.link_text}
                    </a>
                    {dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2]?.suffix}
                  </span>
                </div>`;

const new_jsx = `                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>
                    {renderTrustSignal(dict?.quienes_somos?.values?.contact_box?.trust_signals?.[0])}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>
                    {renderTrustSignal(dict?.quienes_somos?.values?.contact_box?.trust_signals?.[1])}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🛡️</span>
                  <span>
                    {renderTrustSignal(dict?.quienes_somos?.values?.contact_box?.trust_signals?.[2])}
                  </span>
                </div>`;

if (content.includes(old_jsx)) {
  content = content.replace(old_jsx, new_jsx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("File updated successfully.");
} else {
  console.log("ERROR: Could not find old_jsx snippet in the file. Maybe spacing is different?");
}
