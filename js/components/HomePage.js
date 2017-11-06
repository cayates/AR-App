'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene, ViroText, ViroVideo, ViroAnimations, ViroSceneNavigator, ViroScene, ViroAmbientLight, Viro360Video, Viro360Image, ViroUtils, ViroPortal, ViroPortalScene, Viro3DObject, ViroDirectionalLight, Text, ViroButton, ViroImage, ViroMaterials, ViroNode
} from 'react-viro';

class HomePage extends Component {
  render(){
    return (
        <ViroImage
        source={require("../portal_res/Chad2DImages/home.png")}
        animation={{
          name:'getBiggerAndSmaller',
          run:true,
          loop: true,
          delay: 0
        }}
        position={[0,.05,0]}
        height={.1}
        width={.25}
    />
    );
  }
}

ViroAnimations.registerAnimations({
  getBigger: {
    properties: {
      scaleX: 1.0,
      scaleY: 1.0,
      scaleZ: 0,
      opacity: 1.0},
    easing: "Bounce",
    duration: 2000},
  getSmaller: {
    properties: {
      scaleX: 0.5,
      scaleY: 0.5,
      scaleZ: 0,
      opacity: 1.0},
    easing: "EaseIn",
    duration: 2000},
  getBiggerAndSmaller: [
    ["getBigger", "getSmaller"]],

  floatUp: {
      properties:{
        positionX: 0,
        positionY: +1.25,
        positionZ: 0},
      easing: "EaseInEaseOut",
      duration: 700},
  floatDown: {
      properties:{
        positionX: 0,
        positionY: -.05,
        positionZ: 0},
      easing: "EaseInEaseOut",
      duration: 800},
  floatUpAndDown: [
      ["floatUp", "floatDown"]]
});


var styles = StyleSheet.create({
  helloWorldTextStyle: {
  fontFamily: 'Garamond',
  fontSize: 30,
  color: '#000000',
  textAlignVertical: 'center',
  textAlign: 'center',
  },
});

module.exports = HomePage;