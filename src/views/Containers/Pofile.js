import React from 'react';
import BaseComponent from '../Components/BaseComponent';
import StarRatings from 'react-star-ratings';
export default class Profile extends BaseComponent {  
    constructor(props) {
        super(props);
        debugger
        this.state={data:props.data};
    }

    
  render() {
     
    return (
        <div>
        <div className="instructions"><img src={this.state.data.picture.data.url}/></div>
            <div className="instructions">{this.state.data.name}</div>
            <div className="instructions"> {this.state.data.email}</div>
            <div className="instructions"> <StarRatings
                    rating={5}
                    starRatedColor="hsl(51, 71%, 61%)"
                    starDimension="20px"
                    starSpacing="3px"
                /> 
            </div>
        </div>
        );  
    }  
} 

