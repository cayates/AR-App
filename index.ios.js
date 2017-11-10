/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Image,
  Modal, 
  ViroImage,
  ViroScene
} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import axios from 'axios';

import ChooseSubject from "./js/components/ChooseSubject";

var sharedProps = {
  apiKey:"E177B403-DA0B-40C8-99A3-E390C500B559",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

_showSubjects = () => {
  return () => {
    this.setState({
      playGame: true
    })
    }
  }

_getGameStart = () => {
  return (
    <ViroScene {...this.state.sharedProps}
      initialScene={{scene: ChooseSubject}} />
  );
}


export default class ViroSample extends Component {
  constructor() {
    super();
    this.state = {
      playGame: false
    }
    this._getGameStart = this._getGameStart.bind(this);
  }


  render() {
    if (this.state.playGame === true){
      return this._getGameStart()
    } else {
      console.log("play game is false")
    }
  }
    
  _getGameStart(){
    return (
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text>Welcome to the Learning Center</Text>             
        <Text>Ready to Play?</Text>    
        <TouchableHighlight style={localStyles.buttons} onPress={this._getGameStart}>
          <Text style={localStyles.buttonText}>Play Game!</Text>             
        </TouchableHighlight>
      </View>
      )
    }
    
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 50,
    width: 150,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  formBtn : {
    flex : 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    height: 40,
    width: 40,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

AppRegistry.registerComponent('TheLearningCenter', () => ViroSample);
AppRegistry.registerComponent('ViroSample', () => ViroSample);
