/* globals spyOn */
/* eslint-disable global-require */

import postcss from 'postcss';
import fs from 'fs';

describe('theming-plugin', () => {
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
            font-size: var(--terra-font-size, 1.5em);
            color: var(--terra-color, #000);
            background-color: var(--terra-background-color, #000);
            margin: 0.357em;
          }
        }
    `;
  });

  it('should have the correct key for the plugin', () => {
    expect(pluginKey).toEqual('theming-plugin');
  });

  describe('when the SCSS comes from a file', () => {
    it('should find all of the appropriate css', () => {
      const rootNode = postcss.parse(mockStyles);
      const expectedHash = {
        TestingComponent: {
          '--terra-font-size': '1.5em',
          '--terra-color': '#000',
          '--terra-background-color': '#000',
        },
      };
      rootNode.source = { input: { file: 'TestingComponent.scss' } };

      expect(testingFunction(rootNode)).toEqual(JSON.stringify(expectedHash));
      expect(outputtedFileName).toEqual('themeable-variables.json');
      expect(outputtedEncoding).toEqual('utf8');
    });
  });

  describe('when the SCSS does not come from a file', () => {
    it('should find all of the appropriate css', () => {
      const rootNode = postcss.parse(mockStyles);
      const expectedHash = {
        miscellaneous: {
          '--terra-font-size': '1.5em',
          '--terra-color': '#000',
          '--terra-background-color': '#000',
        },
      };

      expect(testingFunction(rootNode)).toEqual(JSON.stringify(expectedHash));
      expect(outputtedFileName).toEqual('themeable-variables.json');
      expect(outputtedEncoding).toEqual('utf8');
    });
  });

  describe('when the SCSS contains non-Terra themeable variables', () => {
    it('should only include terra variables on the final output', () => {
      mockStyles = `
        :local {
          .testing-component {
            font-size: var(--terra-font-size, 1.5em);
            color: var(--terra-color, #000);
            background-color: var(--terra-background-color, #000);
            font-weight: var(--cerner-custom-font-weight, 'bold');
            border: var(--cerner-custom-border, '#000 solid 1px');
            margin: 0.357em;
          }
        }
      `;

      const rootNode = postcss.parse(mockStyles);
      const expectedHash = {
        TestingComponent: {
          '--terra-font-size': '1.5em',
          '--terra-color': '#000',
          '--terra-background-color': '#000',
        },
      };
      rootNode.source = { input: { file: 'TestingComponent.scss' } };

      expect(testingFunction(rootNode)).toEqual(JSON.stringify(expectedHash));
      expect(outputtedFileName).toEqual('themeable-variables.json');
      expect(outputtedEncoding).toEqual('utf8');
    });
  });
});
