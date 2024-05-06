/* eslint-disable */
import fs from "fs";

const outputfile = fs.createWriteStream(
  "../../packages/terra-core-docs/src/terra-dev-site/doc/icon/example/IconStatic.jsx",
  { flags: "w" }
);

const generateIconAll = (iconObjs) =>
  new Promise((resolve) => {
    const staticIcons = iconObjs.filter(
      (iconObj) =>
        !iconObj.themeable && !iconObj.deprecated && !iconObj.isOldLowlight
    );

    staticIcons.sort((a, b) => a.componentName.localeCompare(b.componentName));

    outputfile.write(
      "// This file is autogenerated from scripts/src/generate-example\n"
    );
    outputfile.write("/* eslint-disable */\n");
    outputfile.write("import React from 'react';\n");
    outputfile.write("import {\n");
    staticIcons.forEach((iconObj) => {
      outputfile.write(`  ${iconObj.componentName},\n`);
    });
    outputfile.write("} from 'terra-icon';\n\n");
    outputfile.write("const cellStyle = { padding: '0.5rem' };\n");
    outputfile.write("const IconAll = () => (\n");
    outputfile.write("  <div>");
    outputfile.write("  <table>\n");
    outputfile.write("    <thead>\n");
    outputfile.write("    <tr>\n");
    outputfile.write(`      <th style={cellStyle} key={'svg'}>SVG</th>\n`);
    outputfile.write(
      `      <th style={cellStyle} key={'concept'}>Concept</th>\n`
    );
    outputfile.write(`      <th style={cellStyle} key={'code'}>Code</th>\n`);
    outputfile.write("    </tr>\n");
    outputfile.write("    </thead>\n");
    outputfile.write("    <tbody>\n");
    staticIcons.forEach((iconObj) => {
      outputfile.write(`      <tr style={{ backgroundColor: '#EEEEEE' }}>\n`);
      outputfile.write(
        `        <td style={cellStyle}>${iconObj.syntaxComponent}</td>\n`
      );
      outputfile.write(`        <td style={cellStyle}>${iconObj.name}</td>\n`);
      outputfile.write(
        `        <td style={{ fontWeight: 'bold', padding: '0.5rem' }}>\n`
      );
      outputfile.write("          <code>\n");
      outputfile.write(`            ${iconObj.syntaxImport}`);
      outputfile.write("          </code>\n");
      outputfile.write("        </td>\n");
      outputfile.write("      </tr>\n");
    });
    outputfile.write("    </tbody>\n");
    outputfile.write("  </table>\n");
    outputfile.write("  </div>");
    outputfile.write(");\n\n");

    outputfile.write("export default IconAll;\n");

    resolve(iconObjs);
  });

export default generateIconAll;
