import React, { Component } from "react";
import { Text, View } from "react-native";


class FitExerciseStat extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { quantity, type } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#8eb6e6", fontSize: 23, fontWeight: "500" }}>{quantity}</Text>
        <Text style={{ color: "#9a9ba1", fontSize: 20 }}>{type}</Text>
      </View>
    );
  }
}

export default FitExerciseStat;