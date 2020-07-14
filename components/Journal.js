import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import FitHealthStat from './FitHealthStat';
import FitExerciseStat from './FitExerciseStat';
import FitChart from './FitChart';
import FitImage from './FitImage';
import AdditionalStats from './AdditionalStats';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get("screen");
class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
        };
    }
    componentDidMount() {
        var that = this;
        var date = new Date().getDate() - 1; //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year + ' ',
        });
    }
    render() {
        return (
            <ScrollView >
                <Text style={styles.title}>Journal</Text>
                <Text style={styles.datetime}>{this.state.date}</Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginLeft: width * 0.1,
                        marginRight: width * 0.1,
                        marginBottom: width * 0.05,
                    }}
                >
                    <View>
                        <FitExerciseStat quantity="8225" type="steps" />
                    </View>
                    <View>
                        <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
                            |
                </Text>
                    </View>
                    <View>
                        <FitExerciseStat quantity="6432" type="cal" />
                    </View>
                    <View>
                        <Text style={{ color: "#9a9ba1", fontSize: 40, fontWeight: "100" }}>
                            |
                </Text>
                    </View>
                    <View>
                        <FitExerciseStat quantity="7" type="hours" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Journal;

const styles = StyleSheet.create({
    datetime: {
        fontSize: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
        color: "#9a9ba1",
    },
    title: {
        fontSize: 35,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        color: "#9a9ba1",
        marginBottom: 20,
        
    }
})