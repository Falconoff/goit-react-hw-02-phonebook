import { Component } from 'react';

export default class Inputs extends Component {
  state = {
    contacts: [],
    name: '',
    // смотреть 13 минуту
  };

  handleNameChange = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ name: evt.currentTarget.value });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
        </label>
      </>
    );
  }
}
