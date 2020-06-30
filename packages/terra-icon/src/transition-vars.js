const fs = require('fs');
const path = require('path');

const capitalize = (string) => (
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`
);

['clinical-lowlight-theme', 'orion-fusion-theme'].forEach((theme, index) => {
  const file = fs.readFileSync(path.join(__dirname, theme, 'Icon.module.scss'), { encoding: 'utf8', flag: 'r' });

  const regex = /.*--terra-icon-(\S+)-(path|circle).*/g;
  let match = regex.exec(file);
  const iconVars = {};
  while (match) {
    const icon = `Icon${match[1].split('-').map(capitalize).join('')}`;
    iconVars[icon] = iconVars[icon] || [];
    iconVars[icon].push(match[0]);
    match = regex.exec(file);
  }

  Object.entries(iconVars).forEach(([icon, vars]) => {
    fs.writeFileSync(path.join(__dirname, theme, `${icon}.module.scss`), `:local {\n  .${theme} {\n${vars.join('\n')}\n  }\n}\n`);

    const originalContents = fs.readFileSync(path.join(__dirname, `${icon}.module.scss`), { encoding: 'utf8', flag: 'r' });
    fs.writeFileSync(path.join(__dirname, `${icon}.module.scss`), `@import './${theme}/${icon}.module';\n${index === 0 ? '\n' : ''}${originalContents}`);
  });
});
