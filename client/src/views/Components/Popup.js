import React from 'react';
import StarRatings from 'react-star-ratings';
export default class Popup extends React.Component {  
    constructor(props) {
        super(props);
    }
  render() {
    return (  
        <div className='popup'>
            <div className='popup\_inner'>
            <div className="instructions"><img src={this.props.state.picture} alt={this.props.state.user}/></div>
            <div className="instructions">{this.props.state.user.name}</div>
            <div className="instructions"> {this.props.state.user.email}</div>
            <div className="instructions"> <StarRatings
                    rating={5}
                    starRatedColor="hsl(51, 71%, 61%)"
                    starDimension="20px"
                    starSpacing="3px"
                /> 
            </div>
            </div>
        </div>
        );  
    }  
}  
