const fs = require('fs');
let code = fs.readFileSync('/Users/macbook/Desktop/MAC CONSULTORES JURIDICOS & ASOCIADOS/Mac-Consultores/assets/js/i18n.js', 'utf8');
code = `
const document = { addEventListener: () => {} };
const window = {};
` + code;
eval(code + '\n; module.exports = { siteTranslations, getNestedValue };');
