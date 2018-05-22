/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-menu/docs/README.md';
import { name } from 'terra-menu/package.json';

// Component Source
import MenuSrc from '!raw-loader!terra-menu/src/Menu';
import MenuItemSrc from '!raw-loader!terra-menu/src/MenuItem';
import MenuItemGroupSrc from '!raw-loader!terra-menu/src/MenuItemGroup';

// Example Files
import BasicMenu from './example/BasicMenu';
import BasicMenuSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/BasicMenu';
import MenuBounded from './example/MenuBounded';
import MenuBoundedSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/MenuBounded';
import MenuWidths from './example/MenuWidths';
import MenuWidthsSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/MenuWidths';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Menu',
        example: <BasicMenu />,
        source: BasicMenuSrc,
      },
      {
        title: 'Menu With Arrow',
        example: <BasicMenu isArrowDisplayed />,
        source: BasicMenuSrc,
      },
      {
        title: 'Menu Bounded',
        example: <MenuBounded />,
        source: MenuBoundedSrc,
      },
      {
        title: 'Menu Widths',
        example: <MenuWidths />,
        source: MenuWidthsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Menu',
        componentSrc: MenuSrc,
      },
      {
        componentName: 'Menu.Item',
        componentSrc: MenuItemSrc,
      },
      {
        componentName: 'Menu.ItemGroup',
        componentSrc: MenuItemGroupSrc,
      },
    ]}
  />
);

export default DocPage;
