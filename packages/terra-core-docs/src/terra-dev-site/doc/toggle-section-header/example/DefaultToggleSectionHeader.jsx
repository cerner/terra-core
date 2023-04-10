import React from 'react';
import ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';

const componentProps = {
  title: 'Default Example',
};

const DefaultToggleSectionHeader = () => (
  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>
    <p>Cerner provides research solutions and services to support clinical sites and academic institutions.
          <a href="https://www.cerner.com/gb/en/solutions/data-research">Data and research</a>
          {' '}
          We bring a deep understanding of clinical systems, workflows and health data, as well as extensive experience in pharmaceutical, outcomes and health economic research. Through medical and economic analyses, researchers gain insights into the viability, safety, and efficacy of new and existing therapies. Principal investigators and research coordinators can use the Cerner EHR to facilitate and enhance their research activities.</p>
  </ToggleSectionHeaderExampleTemplate>
);

export default DefaultToggleSectionHeader;
