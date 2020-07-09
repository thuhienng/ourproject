import React, { Component } from "react";
import { Text, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class FitHealthStat extends Component{
  constructor(props){
    super(props)
  }
  render(){
  const { doubleIcon, iconBackgroundColor, iconColor, actual, over, type } = this.props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <View
        style={{
          width: 35,
          height: 35,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: iconBackgroundColor,
          marginRight: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="angle-right" size={26} color={iconColor} />
          {doubleIcon && (
            <FontAwesome name="angle-right" size={26} color={iconColor} />
          )}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: "#9a9ba1", fontSize: 30, fontWeight: "600" }}>
            {actual}
          </Text>
          <Text style={{ color: "#9a9ba1", fontSize: 20 }}>{over}</Text>
        </View>
        <Text style={{ color: "#9a9ba1", fontSize: 15 }}>{type}</Text>
      </View>
    </View>
  );
  }
}

export default FitHealthStat;