import React from 'react';
import { MultiChoiceField } from 'terra-form';

const MultiChoiceFieldExamples = () => (
  <form>
    <MultiChoiceField
      label="Mark all of the programming languages you know"
      name="language"
      help="Every check should indicate at least 3 months of experience"
      choices={[
        { name: 'C', value: 'c' },
        { name: 'Java', value: 'java' },
        { name: 'Ruby', value: 'ruby' },
        { name: 'C++', value: 'c++' },
        { name: 'JavaScript', value: 'javascript' },
      ]}
    />
    <div>
      <MultiChoiceField
        label="What Corporate Challenge events would you like to participate in?"
        name="sporting_event"
        isInline
        choices={[
          { name: '5K', value: '5k' },
          { name: 'Half Marathon', value: 'half_marathon' },
          { name: 'Bowling', value: 'bowling' },
          { name: 'Trap Shooting', value: 'trap_shooting' },
        ]}
      />
      <MultiChoiceField
        label="Mark any events you are able to help volunteer."
        name="sporting_event"
        isInline
        choices={[
          { name: 'DevCon 2017', value: 'devcon_2017' },
          { name: 'CHC 2017', value: 'chc_2017' },
          { name: 'Intern Hackfest', value: 'intern_hackfest' },
        ]}
      />
    </div>
  </form>
);

export default MultiChoiceFieldExamples;
