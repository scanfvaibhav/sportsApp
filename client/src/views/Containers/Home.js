import React from 'react';
import { connect } from 'react-redux';
import SearchField from '../Components/SearchField.js';

import { LightningBolt } from '../assets/lightning.svg';
import { RadioButtonSection } from '../Components/index';
import { setLocationTextInput, setLocationRadioInput,
  setDefaultInput } from '../../store/actions/index';

const radioButtons = [
  {
    value: 'pid',
    radioButtonLabel: 'Player ID',
  }
];

export class Home extends React.Component {

  constructor(props) {
    super(props);

   
  }

  handleRadioInputChange = (event) => {
    this.props.actions.setLocationRadioInput({ locationType: event.target.value });
  }

  

  componentDidUpdate = (prevProps) => {
    const { locationData, locationType } = this.props;

    if (prevProps.locationData !== locationData) {
      this.props.history.push({
        pathname: '/current-weather',
        state: {
          type: locationType,
          data: locationData,
        },
      });
    }
  }

  render() {
   
    return (
      <div>
        <div className='header'>
          <h2>SportsX</h2>
          <img src={LightningBolt}/>
        </div>
        <div className="instructions">
          <p>Enter to Analyse</p>
        </div>
        
        <SearchField  actions={this.props.actions}/>
         
     
        <div className='radio-button-section'>
          <RadioButtonSection
            radioButtons={radioButtons}
            selectedOption={this.props.locationType}
            onChange={this.handleRadioInputChange}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = function(state) {
  const locationData = state && state.locationData;
  const locationType = state && state.locationType;

  return {
    locationType: locationType,
    locationData: locationData,
  };
};

const mapDispatchToProps = function(dispatch) {
  const dispatchActions = {
    setLocationRadioInput: function(locationRadioConfig) {
      dispatch(setLocationRadioInput(locationRadioConfig));
    },
    setLocationTextInput: function(locationTextConfig) {
      dispatch(setLocationTextInput(locationTextConfig));
    },
    setDefaultInput: function() {
      dispatch(setDefaultInput());
    },
  };

  return {
    actions: dispatchActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
