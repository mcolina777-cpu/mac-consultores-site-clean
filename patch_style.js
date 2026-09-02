const fs = require('fs');
const file = 'src/app/[locale]/about/legalidad-diligencia/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the specific container
const targetContainer = `<section className="section-padding-asym">
        <div className="container">`;
const newContainer = `<section className="section-padding-asym">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>`;
content = content.replace(targetContainer, newContainer);

// 2. Replace paragraph styles
const targetP = `className="text-left max-w-100 mb-1rem" style={{ lineHeight: 1.75 }}`;
const newP = `className="text-left max-w-100 mb-1-5rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}`;

// apply to all
content = content.replaceAll(targetP, newP);

// 3. For the one paragraph that has mb-2rem
const targetP2 = `className="text-left max-w-100 mb-2rem" style={{ lineHeight: 1.75 }}`;
const newP2 = `className="text-left max-w-100 mb-2rem"
              style={{
                lineHeight: 1.75,
                fontSize: '1.05rem',
                color: 'var(--text-main, #1f2937)',
              }}`;
content = content.replaceAll(targetP2, newP2);

fs.writeFileSync(file, content);
