import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

import * as actions from '../../store/actions/index';
import { WeatherCardError, Loader } from '../Components/index';
import './App.css';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    props.actions.getWeatherData({ weatherSearchData: this.props.location.state });
    this.inputFieldRef = React.createRef();
  }

  render() {
    const { loading, loaded, error,
     name} = this.props;
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
  let profile= (
      <div className="Profile">
      <div className='weatherCard'>
      <img src={props.person.imageURL} alt='Weather icon'/>
      </div>
        <h1 className="Name">{props.person.name}</h1>
        <StarRatings
        rating={getRatings(props.person.data)}
        starRatedColor="hsl(51, 71%, 61%)"
        starDimension="20px"
        starSpacing="3px"
      />
        <div className="Bio"> &mdash;{props.person['profile']}</div>
        <div className="Bio"> He is {props.person["battingStyle"]}sman & {props.person["bowlingStyle"]} bowler</div>
        <div className="Bio"> He has played for {props.person['majorTeams']}</div>
        <div className="Bio"> He was born on &mdash;{props.person['born']}(Current Age{props.person['currentAge']})</div>
        <div className="Quote">
          <blockquote>&ldquo; {props.person.country} &rdquo;</blockquote>
        </div>
      </div>
    );
    return profile;
}
function getRatings(data){
  let fullRate = 0;
  try{
    let odirate =  (data.batting.ODIs.Inns/452)*5;
    let testsrate = (data.batting.tests.Inns/329)*5;
    let odiRuns = (data.batting.ODIs.Runs/10000)*5;
    let testRuns = (data.batting.tests.Runs/10000)*5;
  
    fullRate = Math.max(...[odiRuns,testRuns,testsrate,odirate]);
  }catch(err){
    console.log(err);
  };
 
return fullRate>5?5:fullRate;
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
