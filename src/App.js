import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      selectedOption: 'option1',
      selectedValue: 'default',
      selectedItemCategory: '',
      submittedData: null,
    };

    // Binding functions to the class instance
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButtonClick() {
    console.log('Button clicked!');
  }

  handleRadioButtonChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleDropdownChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  toggleSidebar() {
    this.setState((prevState) => ({ showSidebar: !prevState.showSidebar }));
  }

  handleSidebarItemClick(itemCategory) {
    this.setState({ selectedItemCategory: itemCategory });
  }

  handleSubmit() {
    const { selectedItemCategory, selectedOption, selectedValue } = this.state;
    const submittedData = {
      selectedItemCategory,
      selectedOption,
      selectedValue,
    };

    this.setState({ submittedData });
  }

  render() {
    const { showSidebar, selectedOption, selectedValue, selectedItemCategory, submittedData } = this.state;

    return (
      <div className='App'>
        {/* Sidebar */}
        {showSidebar && (
          <div className='sidebar'>
            <p onClick={() => this.handleSidebarItemClick('food')}>Food</p>
            <p onClick={() => this.handleSidebarItemClick('fruit')}>Fruit</p>
            <p onClick={() => this.handleSidebarItemClick('sweet')}>Sweet</p>
          </div>
        )}

        {/* Main Content */}
        <div className='main-content'>
          <h1>Main Content</h1>

          {/* Selected Item Category */}
          <p>Selected Item Category: {selectedItemCategory}</p>

          {/* Render Radio Buttons and Submit Button based on the selected item category */}
          {selectedItemCategory === 'food' && (
            <div>
              {/* Radio Buttons for Food */}
              <label>
                <input
                  type='radio'
                  value='foodOption1'
                  checked={selectedOption === 'foodOption1'}
                  onChange={this.handleRadioButtonChange}
                />
                Idli
              </label>
              <label>
                <input
                  type='radio'
                  value='foodOption2'
                  checked={selectedOption === 'foodOption2'}
                  onChange={this.handleRadioButtonChange}
                />
                Dosa
              </label>
              <label>
                <input
                  type='radio'
                  value='foodOption3'
                  checked={selectedOption === 'foodOption3'}
                  onChange={this.handleRadioButtonChange}
                />
                Puri
              </label>

              {/* Dropdown for Food */}
              <div>
                <select value={selectedValue} onChange={this.handleDropdownChange}>
                  <option value='default'>Select a food option</option>
                  <option value='foodItemA'>1 Plate</option>
                  <option value='foodItemB'>2 Plate</option>
                  <option value='foodItemC'>3 Plate</option>
                </select>
              </div>

              {/* Submit Button */}
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          )}

          {/* Similarly, render Radio Buttons and Submit Button for 'fruit' and 'sweet' categories */}

          {/* Display Submitted Data */}
          {submittedData && (
            <div>
              <h2>Submitted Data:</h2>
              <p>Selected Item Category: {submittedData.selectedItemCategory}</p>
              <p>Selected Option: {submittedData.selectedOption}</p>
              <p>Selected Value: {submittedData.selectedValue}</p>
            </div>
          )}

          {/* Sidebar Toggle Button */}
          <button onClick={this.toggleSidebar}>Toggle Sidebar</button>
        </div>
      </div>
    );
  }
}

export default App;
