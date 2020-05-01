import React from "react";
import ReactModalLogin from "react-modal-login";
 
import { facebookConfig, googleConfig } from "./social-config.js";
import  {getUser}  from '../../service/BaseService';
import Popup from '../Components/Popup';
import GraphPopup from '../Components/GraphPopup';
 
export default class Login extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      graphPopupdisplay : false,
      graphPopupmsg : "Dataview",
      graphData : {
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
        links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
        },
      showPopup: false ,
      showModal: false,
      loading: false,
      error: null,
      user:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
      picture:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).picture.data.url:""
    };
  }
 
  openModal() {
      
    this.setState({
      showModal: true
    });
    
  }
  togglePopup() {  
    this.setState({
      showPopup:!this.state.showPopup
    });     
  } 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
      debugger
      this.closeModal();
      let token=response.authResponse.accessToken;
      this.initUser(token);
     
      localStorage.setItem("authInfo",JSON.stringify(response));

    console.log("logged successfully with " + response);
  }
  initUser(token) {
    getUser(this,token).then((res) => {
      if(res){
        localStorage.setItem("userInfo",JSON.stringify(res.data));
      this.setState({
        user: res.data,
        picture: res.data.picture,
      });
    }
    }).catch(() => {
      //reject('ERROR GETTING DATA FROM FACEBOOK')
    });
  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
  toggleGraphPopup=()=> {  
    this.setState({
      graphPopupdisplay:!this.state.graphPopupdisplay,
      graphPopupmsg:"Friends"
    });
  } 
 
  render() {
    return (
      <div>
     
        {this.state.user.name?"":<button onClick={() => this.openModal()}>Login</button>}
        {this.state.user.name?<button onClick={()=>this.togglePopup()}>{this.state.user.name}</button>:""}
        {this.state.showPopup ?  
          <Popup  
                    state={this.state}  
                    closePopup={this.togglePopup.bind(this)}  
          />  
          : null  
          }
          <button onClick={()=>this.toggleGraphPopup()}>DataView</button>
          {this.state.graphPopupdisplay?<GraphPopup msg={this.state.graphPopupmsg} data={this.state.graphData}/>:null}
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebookConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            }
            /*,
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }*/
          }}
        />
      </div>
    );
  }
}