import React from 'react';
import ChoiceField from 'terra-form/lib/components/ChoiceField';

const ChoiceFieldExamples = () => (
  <form>
    <ChoiceField />
    <ChoiceField
      label="State"
      name="state"
      error="This field is required"
      help="This is a choice field"
      required
      choiceName="name"
      choiceValue="value"
      choices={[{ name: 'Kansas', value: 'ks' }, { name: 'Missouri', value: 'MO' }]}
    />
    <ChoiceField
      label="Prime Programming Language"
      name="language"
      help="This is the programming language you are looking to work with most"
      required
      choiceName="name"
      choiceValue="value"
      choices={[
        { name: 'C', value: 'c' },
        { name: 'Java', value: 'java' },
        { name: 'Ruby', value: 'ruby' },
        { name: 'C++', value: 'c++' },
        { name: 'JavaScript', value: 'javascript' },
      ]}
    />
    <div>
      <ChoiceField
        label="What senior level role would you be most interested in?"
        name="role"
        required
        isInline
        error="One of these must be selected"
        choices={[
          { name: 'Senior UX Architect', value: 'senior_ux_architect' },
          { name: 'Software Architect', value: 'software_architect' },
          { name: 'Team Lead', value: 'team_lead' },
          { name: 'Senior Software Engineer', value: 'senior_software' },
          { name: 'Executive', value: 'executive' },
        ]}
      />
      <ChoiceField
        label="What is your work location preference"
        name="location"
        required
        isInline
        help="Our company provides flexibilites for in office and at home work"
        error="One of these must be selected"
        choices={[
          { name: 'Full Time at Home', value: 'full_home' },
          { name: 'Full Time in Office', value: 'full_office' },
          { name: 'Mostly at Home, Partially in Office', value: 'more_home' },
          { name: 'Mostly in Office, Partially at Home', value: 'more_office' },
        ]}
      />
    </div>
  </form>
);

export default ChoiceFieldExamples;
