import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { weatherIcon } from '../../utils';
import * as actions from '../../store/actions/index';
import { WeatherCardError, Loader } from '../Components/index';
import './App.css';

class CurrentWeather extends Component {
  constructor(props) {
    debugger
    super(props);
    props.actions.getWeatherData({ weatherSearchData: this.props.location.state });
    this.inputFieldRef = React.createRef();
  }

  render() {
    const { loading, loaded, error, currentTemp, currentConditionDescription,
      humidity, wind, profile,cityName, weatherId ,imageURL,battingStyle,bowlingStyle,name,majorTeams,currentAge,born,fullName,country,playingRole} = this.props;
const person = this.props;
    if (error) {
      return (
        <div>
          <WeatherCardError />
        </div>
      );
    }

    if (loading) {
      return (
        <Loader />
      );
    }

    return (
      <div>
{


  loaded && (
    <div>
    <Header/>
    <div className="App">
            <Profile person={person} quote={name}/>
            
          </div>
    </div>
    )
    }
    </div>
        );
      /*<div>
        { loaded &&
          (
            <div>
              <div className='homeBtn'>
                <Link to='/'><button>Home</button></Link>
              </div>
              <div className='weatherCardContainer'>
                <div className='weatherCard'>
                  <img src={imageURL} alt='Weather icon'/>
                  <div className='conditionsOverview'>
                    <p>{currentTemp}°</p>
                    <p>{currentConditionDescription}</p>
                  </div>
                  <div className='conditionDetails'>
                    
                  </div>
                </div>

                <h4> Name | {name} </h4>
                <p>Birth: {born}</p>
                <p>Country: {country}  </p>
              </div>
            </div>
          )
        }
      </div>*/
  }
}








function Image(props){
    return (
      <div style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}
function Header(props){
  return(<div className='zipcodeInput'>
  <input
    type='text'
    placeholder='Search..'
    name='pid'
  />
  <button>ENTER</button>
</div>);
}
function Profile(props){
  let properties =  ['battingStyle','bowlingStyle','majorTeams','currentAge','born','profile',]
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <div>
       { properties.map(function(id){
         if(props.person[id])
          return <div><p>{id}</p> <div className="Bio"> &mdash;{props.person[id]}</div></div>
        })}</div>
        <div className="Quote">
          <blockquote>&ldquo; {props.person.country} &rdquo;</blockquote>
          
        </div>
        
      </div>
    );
}

const mapStateToProps = function(state) {
  const { main, weather, name, wind, loading, loaded, error } = state;

  return {
    ...state,
    loading: loading,
    loaded: loaded,
    error: error,
    cityName: name,
    weatherId: weather && weather[0].id,
    humidity: main && main.humidity,
    wind: wind && wind.speed,
    windDirection: wind && wind.deg,
    currentTemp: main && Math.round(main.temp),
    currentCondition: weather && weather[0].main,
    currentConditionDescription: weather && weather[0].description,
    profile: state.profile,
    imageURL: state.imageURL,
battingStyle: state.battingStyle,
bowlingStyle: state.bowlingStyle,
majorTeams: state.majorTeams,
currentAge: state.currentAge,
born: state.born,
fullName: state.fullName,
name: state.name,
country: state.country,
playingRole: state.playingRole
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    actions: {
      getWeatherData: function(weatherSearchData) {
        dispatch(actions.getWeatherData(weatherSearchData));
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
