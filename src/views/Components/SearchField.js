import Autosuggest from 'react-autosuggest';
import React from 'react';
import  {getSearchinfo}  from '../../service/BaseService';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'cEcc',
    year: 2012
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
    
    return String(suggestion.pid);
};

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className="suggestions">
    {suggestion.name}
  </div>
);

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
    this.props.actions.setDefaultInput();
    this.inputFieldRef = React.createRef();
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  fetchSearchResults = query => {
      let _this=this;
	// By default the limit of results is 20
  getSearchinfo(query,this).then((res) => {
    if(res){
    _this.setState({
      suggestions: res.data,
      loading: false,
    });
  }
  });
};

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  handleButtonClick = (event) => {
    this.props.actions.setLocationTextInput({ locationData: this.state.value });
  };
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a player name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
        <div className='zipcodeInput'>
      <Autosuggest
      ref={this.inputFieldRef}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.fetchSearchResults}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button onClick={this.handleButtonClick}>ENTER</button>
      </div>
    );
  }
}