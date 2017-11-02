/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-flex-box/docs/README.md';
import { version } from 'terra-flex-box/package.json';
import FlexBox from 'terra-flex-box';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import FlexBoxSrc from '!raw-loader!terra-flex-box/src/FlexBox';

// Example File
import FlexBoxAlignment from './FlexBoxAlignment';

const FlexBoxExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={FlexBoxSrc} />
    <h2>Sample FlexBox Inputs</h2>
    <br />
    <FlexBoxAlignment />
    <br />
    <br />
    <h2>Display Children in Order with Different Alignments</h2>
    <br />
    <FlexBox id="parent" flexDirection="column" style={{ border: '1px solid black' }}>
      <FlexBox id="child1" order={2} alignSelf="flex-end">
        <span>3 Test Display 3</span>
      </FlexBox>
      <FlexBox id="child2" order={1} alignSelf="center">
        <span>2 Test Display 2</span>
      </FlexBox>
      <FlexBox id="child3" order={0} alignSelf="flex-start">
        <span>1 Test Display 1</span>
      </FlexBox>
    </FlexBox>
    <br />
    <br />
    <h2>Flex Children to Fill and Shrink</h2>
    <br />
    <FlexBox id="parent" style={{ border: '1px solid black' }}>
      <FlexBox id="child1" flex="0 0 40%" alignSelf="stretch" style={{ borderRight: '1px solid black' }}>
        <span>1 Test Display that is 40% 1</span>
      </FlexBox>
      <FlexBox id="child2" flex="1 1 auto" alignSelf="stretch" style={{ borderRight: '1px solid black' }}>
        <span>2 Test Display to fill center 2</span>
      </FlexBox>
      <FlexBox id="child3" flex="0 0 40%" alignSelf="stretch">
        <span>3 Test Display that is 40% 3</span>
      </FlexBox>
    </FlexBox>
  </div>
);

export default FlexBoxExamples;
