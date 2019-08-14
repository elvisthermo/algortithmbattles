import React from 'react';
const screenWidth = Dimensions.get('window').width
import {StyleSheet,Dimensions,View,Text,ScrollView} from 'react-native';

import {
    BarChart,

} from 'react-native-chart-kit'

export default function Barchart(props){
    const data = {
        labels: props.labels,
        datasets: [{
            data: props.values
        }]
    }

    const chartConfig = {
        backgroundGradientFrom: '#f8f8f8',
        backgroundGradientTo: '#f8f9ff',
        color: ()=> '#000000',
        strokeWidth: 2, // optional, default 3
    }
    return(
        <View style={styles.box}>
            <ScrollView>

            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                fromZero={true}
                yAxisLabel={'ms'}
                chartConfig={chartConfig}
                absolute={false}
            />

            <View>
                {props.values.map((val,i)=>(<Text style={styles.text} key={i}>{props.labels[i]}:{val}ms</Text>))}

            </View>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#455bd1',
        flex:1,
        alignSelf:'center',

    },
    text:{
        width:200,
        margin:2,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor: "#fff",

    }

});

