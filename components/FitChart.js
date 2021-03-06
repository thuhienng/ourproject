import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import { BarChart } from 'react-native-chart-kit';

class FitChart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { data, title, description, baseline } = this.props;
    return (
        <View style={{ flex: 1 }}>
        <View style={{ paddingLeft: 20 }}>
            <Text
                style={{
                color: "#9a9ba1",
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
            }}
            >
            {title}
            </Text>
            {description && (
            <Text style={{ color: "#9a9ba1", fontSize: 15, marginBottom: 20 }}>
                {description}
            </Text>
            )}
        </View>
        <View>
            <BarChart
                style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
            yAxisSuffix=""
            data={data}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel=""
            chartConfig={{
                backgroundColor: "#1f2026",
                backgroundGradientFrom: "#1f2026",
                backgroundGradientTo: "#1f2026",
                fillShadowGradient: "#7262f8",
                fillShadowGradientOpacity: 1,
                color: (opacity = 1) => `rgba(${154}, ${155}, ${161}, ${opacity})`,
                labelColor: (opacity = 1) =>
                    `rgba(${154}, ${155}, ${161}, ${opacity})`,
                style: {
                borderRadius: 16,
                right: 0,
                paddingRight: 64,
                },
                barPercentage: 0.5,
                decimalPlaces: 0,
                baseline: baseline,
            }}
            showBarTops={false}
            fromZero
            />
        </View>
        </View>
    );
}
}

export default FitChart;