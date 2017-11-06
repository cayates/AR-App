'use strict';

import React, { Component } from 'react';

import {StyleSheet, Button, View} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroImage,
  ViroVideo,
  ViroAnimations,
  ViroSceneNavigator,
  ViroScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroARPlaneSelector,
  ViroNode
} from 'react-viro';

import CYScene from './components/CYScene'

class HelloWorldSceneAR extends Component{
constructor(){
  super()
  this.state= {
  }
}
  
  render() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "hiAR.me"})}}>
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <CYScene />
        </ViroARScene>
    )
  }

  _onClick(source) {
      this.setState({text: "Clicked"});
    }

};
module.exports = HelloWorldSceneAR;
