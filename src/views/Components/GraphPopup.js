import React from 'react';
import MyGraph from '../Components/Dataview/MyGraph.js';
export default class GraphPopup extends React.Component {  
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data,
            msg:this.props.msg
        }
    }
  render() {
    return (  
        <div className='graph-popup'>
            <div className="instructions">{this.state.msg}</div>
                <MyGraph data={this.state.data} msg={this.state.msg}/>
        </div>
        );  
    }  
}  
