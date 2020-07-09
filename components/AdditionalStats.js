import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


class AdditionalStats extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { name, description } = this.props;
    return (
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <View>
            <Text
              style={{
                color: "#e6e7ec",
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {name}
            </Text>
            <Text style={{ color: "#9a9ba1", fontSize: 15, marginBottom: 20 }}>
              {description}
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
          <FontAwesome name="angle-right" size={26} color="#9a9ba1" />
          </View>
        </View>
    )
  }    
}

export default AdditionalStats;
