/* globals spyOn */
/* eslint-disable global-require */

import postcss from 'postcss';
import fs from 'fs';
import path from 'path';

describe('theming-plugin', () => {
  let expectedHash;
  let mockStyles;
  let pluginKey;
  let outputtedFileName;
  let outputtedEncoding;
  let testingFunction;
  let ThemingPlugin;

  beforeEach(() => {
    spyOn(postcss, 'plugin').and.callFake((key, processingFunction) => {
      pluginKey = key;
      return processingFunction;
    });

    spyOn(fs, 'writeFileSync').and.callFake((fileName, hash, encoding) => {
      outputtedFileName = fileName;
      outputtedEncoding = encoding;
      return hash;
    });

    // We need to require this here as the theming-plugin relies on a function that needs to be stubbed.
    ThemingPlugin = require('../../theming-plugin');
    testingFunction = ThemingPlugin();
    mockStyles = `
        :local {
          .testing-component {
            font-family: var(--terra-font-family, 'Helvetica Neue', Helvetica, Arial, sans-serif);
            font-size: var(--terra-font-size, 1.5em);
            color: var(--terra-color, #000);
            background-color: var(--terra-background-color, #000);
            margin: 0.357em;
            box-shadow: var(--terra-box-shadow, 0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 4px 3px -3px rgba(0, 0, 0, 0.5));
          }
        }
    `;

    expectedHash = `{
      "TestingComponent": {
        "--terra-font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif",
        "--terra-font-size": "1.5em",
        "--terra-color": "#000",
        "--terra-background-color": "#000",
        "--terra-box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 4px 3px -3px rgba(0, 0, 0, 0.5)"
      }
    }`;
  });

  it('should have the correct key for the plugin', () => {
    expect(pluginKey).toEqual('theming-plugin');
  });

  describe('when the SCSS comes from a file', () => {
    it('should find all of the appropriate css', () => {
      const rootNode = postcss.parse(mockStyles);
      rootNode.source = { input: { file: 'TestingComponent.scss' } };
      expect(JSON.parse(testingFunction(rootNode))).toEqual(JSON.parse(expectedHash));
      expect(outputtedFileName.slice(outputtedFileName.length - 55)).toEqual(path.join('terra-core', 'packages', 'terra-site', 'themeable-variables.json'));
      expect(outputtedEncoding).toEqual('utf8');
    });
  });

  describe('when the SCSS does not come from a file', () => {
    it('should find all of the appropriate css', () => {
      const rootNode = postcss.parse(mockStyles);
      expectedHash = `{
        "miscellaneous": {
          "--terra-font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif",
          "--terra-font-size": "1.5em",
          "--terra-color": "#000",
          "--terra-background-color": "#000",
          "--terra-box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 4px 3px -3px rgba(0, 0, 0, 0.5)"
        }
      }`;

      expect(JSON.parse(testingFunction(rootNode))).toEqual(JSON.parse(expectedHash));
      expect(outputtedFileName.slice(outputtedFileName.length - 55)).toEqual(path.join('terra-core', 'packages', 'terra-site', 'themeable-variables.json'));
      expect(outputtedEncoding).toEqual('utf8');
    });
  });

  describe('when the SCSS contains non-Terra themeable variables', () => {
    it('should only include terra variables on the final output', () => {
      mockStyles = `
        :local {
          .testing-component {
            font-family: var(--terra-font-family, 'Helvetica Neue', Helvetica, Arial, sans-serif);
            font-size: var(--terra-font-size, 1.5em);
            color: var(--terra-color, #000);
            background-color: var(--terra-background-color, #000);
            font-weight: var(--cerner-custom-font-weight, 'bold');
            border: var(--cerner-custom-border, '#000 solid 1px');
            margin: 0.357em;
            box-shadow: var(--terra-box-shadow, 0 4px 8px 0 rgba(0, 0, 0, 0.35), 0 4px 3px -3px rgba(0, 0, 0, 0.5));
          }
        }
      `;

      const rootNode = postcss.parse(mockStyles);
      rootNode.source = { input: { file: 'TestingComponent.scss' } };

      expect(JSON.parse(testingFunction(rootNode))).toEqual(JSON.parse(expectedHash));
      expect(outputtedFileName.slice(outputtedFileName.length - 55)).toEqual(path.join('terra-core', 'packages', 'terra-site', 'themeable-variables.json'));
      expect(outputtedEncoding).toEqual('utf8');
    });
  });
});
