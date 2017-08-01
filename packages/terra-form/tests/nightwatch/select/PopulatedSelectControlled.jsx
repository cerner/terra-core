import React from 'react';

import Select from '../../../lib/Select';

class ControlledSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: 'micros',
    };

    this.updateAnimal = this.updateAnimal.bind(this);
  }

  updateAnimal(e) {
    this.setState({
      animal: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <Select
          name="foo"
          options={[{ value: 'puppies', display: 'Puppies' },
                    { value: 'kittens', display: 'Kittens' },
                    { value: 'micros', display: 'Microprocessors' },
                    { value: 'snaps', display: 'Snappers' }]}
          onChange={this.updateName}
          value={this.state.animal}
        />
        <button type="submit" />
      </form>
    );
  }
}

export default ControlledSelect;
