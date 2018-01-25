import React from 'react';
import TextField from 'terra-form/lib/TextField';

class TextFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mike',
      nameMaxLength: 'Michael',
      favoriteFood: 'Chicken McNuggets',
      favoriteMovie: 'Tron',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameMaxLengthChange = this.handleNameMaxLengthChange.bind(this);
    this.handlefavFoodChange = this.handlefavFoodChange.bind(this);
    this.handlefavMovieChange = this.handlefavMovieChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleNameMaxLengthChange(event) {
    this.setState({ nameMaxLength: event.target.value });
  }

  handlefavFoodChange(event) {
    this.setState({ favoriteFood: event.target.value });
  }

  handlefavMovieChange(event) {
    this.setState({ favoriteMovie: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <TextField
            label="Name"
            name="name"
            inputId="name"
            defaultValue="Mike"
            error="Name is required"
            help="The name given to you at birth."
            onChange={this.handleNameChange}
          />
          <TextField
            label="Name with Maxlength"
            name="name"
            inputId="user-maxlength"
            defaultValue="Michael"
            error="Name is required"
            help="The name given to you at birth."
            maxLength={15}
            required
            onChange={this.handleNameMaxLengthChange}
          />
          <div>
            <TextField
              label="Favorite Food"
              name="favorite_food"
              inputId="favorite-food"
              isInline
              defaultValue="Chicken McNuggets"
              error="Name is required"
              help="Our team loves catering birthday lunches!"
              onChange={this.handlefavFoodChange}
            />
            <TextField
              label="Favorite Movie"
              name="favorite_movie"
              isInline
              inputId="favorite-movie"
              defaultValue="Tron"
              help="We like to do movie outings!"
              maxLength={50}
              required
              onChange={this.handlefavMovieChange}
            />
          </div>
        </form>
        <hr />
        <ul>Input Provided:
          <li style={{ margin: '10px' }}>Name - {this.state.name}</li>
          <li style={{ margin: '10px' }}>Name with Maxlength - {this.state.nameMaxLength}</li>
          <li style={{ margin: '10px' }}>Favorite Food - {this.state.favoriteFood}</li>
          <li style={{ margin: '10px' }}>Favorite Movie - {this.state.favoriteMovie}</li>
        </ul>
        <br />
      </div>
    );
  }
}
export default TextFieldExamples;
