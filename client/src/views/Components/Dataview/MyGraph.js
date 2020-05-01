import { Graph } from "react-d3-graph";
import React from 'react';
import GraphPopup from '../GraphPopup.js';
export default class MyGraph extends React.Component {  
    constructor(props) {
        super(props);
        this.state={
            'msg':"msg"
        };
    }
// graph payload (with minimalist structure)

 
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
myConfig = {
    nodeHighlightBehavior: true,
    height:700,
    width: 1000,
    node: {
        color: "lightgreen",
        size: 220,
        highlightStrokeColor: "yellow",
        "fontColor": "yellow",
        "fontSize": 8,
    },
    link: {
        highlightColor: "lightblue",
    },
};
 
// graph event callbacks
onClickGraph(){
    
    //this.state.msg='Clicked the graph background';
};
 
onClickNode(nodeId) {
    //window.alert(`Clicked node ${nodeId}`);
};
 
onDoubleClickNode (nodeId) {
   // window.alert(`Double clicked node ${nodeId}`);
};
 
onRightClickNode(event, nodeId) {
    //window.alert(`Right clicked node ${nodeId}`);
};
 onMouseOverNode(nodeId) {
   // window.alert(`Mouse over node ${nodeId}`);
};
 
 onMouseOutNode(nodeId) {
    //window.alert(`Mouse out node ${nodeId}`);
};
 
 onClickLink(source, target) {
    //window.alert(`Clicked link between ${source} and ${target}`);
};
 
 onRightClickLink(event, source, target) {
   // window.alert(`Right clicked link between ${source} and ${target}`);
};
 
 onMouseOverLink(source, target) {
    //window.alert(`Mouse over in link between ${source} and ${target}`);
};
 
 onMouseOutLink(source, target) {
   // window.alert(`Mouse out link between ${source} and ${target}`);
};
 
 onNodePositionChange(nodeId, x, y) {
    //window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};
render() {
  return(
      
    <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={this.props.data}
        config={this.myConfig}
        onClickNode={this.onClickNode}
        onDoubleClickNode={this.onDoubleClickNode}
        onRightClickNode={this.onRightClickNode}
        onClickGraph={this.onClickGraph}
        onClickLink={this.onClickLink}
        onRightClickLink={this.onRightClickLink}
        onMouseOverNode={this.onMouseOverNode}
        onMouseOutNode={this.onMouseOutNode}
        onMouseOverLink={this.onMouseOverLink}
        onMouseOutLink={this.onMouseOutLink}
        onNodePositionChange={this.onNodePositionChange}
    />);
  }
}