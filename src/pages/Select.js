import React,{useState} from 'react';
import {View,Picker,StyleSheet,Image,Platform,TouchableOpacity,Text,KeyboardAvoidingView} from 'react-native';

import logo from '../assets/logo.png';

export default function Select({navigation}){
    const [algorithm1,setAlgorithm1] = useState('');
    const [algorithm2,setAlgorithm2] = useState('');
    const options = ["BubbleSort",
        "SelectionSort",
        "InsertionSort",
        "QuickSort",
        "HeapSort",
        "BucketSort",
        "CountSort",
        "ShellSort"]

    const [secondOpt,setSecondOpt] = useState( ["BubbleSort", "SelectionSort", "InsertionSort", "QuickSort", "HeapSort", "BucketSort", "CountSort", "ShellSort"]);

    const [list,setList] = useState('');

    function secondOptions(itemValue){
        setAlgorithm1(itemValue)
        let second = options.filter((value)=>{
            if(value!==itemValue){
                return value;
            }
        })
        setSecondOpt(second);

    }

    async function sendOptions(){
        if(algorithm1==='' )
            return  alert('select the algorithm 1');
        if(algorithm1==='all' )
            // setAlgorithm2('all')
            return navigation.navigate('Main', {
                algorithm1: algorithm1,
                list: list,
            })
        if(algorithm2===''){
            return  alert('select the algorithm 2');
        }
        if(list==='')
            return  alert('select the list value');

        return navigation.navigate('Main', {
            algorithm1: algorithm1,
            algorithm2: algorithm2,
            list: list,
        })

    }


    return(
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS ==='ios'}
            style={styles.container}>

            <Image style={{alignSelf:'center'}} source={logo}/>
            <Text>select first algorithm:</Text>
            <View style={styles.select}>
                <Picker
                    style={{height: 50}}
                    selectedValue={algorithm1}
                    style={{height: 50}}
                    onValueChange={(itemValue) => {
                        secondOptions(itemValue);
                        }}
                >

                    <Picker.Item label="..." value=""/>
                    {
                        options.map(value => (
                            <Picker.Item key={value} label={value} value={value} />

                        ))
                    }
                    <Picker.Item label="all" value="all"/>

                </Picker>
            </View>
                {(algorithm1!=='all') &&(
                    <View style={{backgroundColor:'#4c51a1'}}>
                        <Text>select second algorithm:</Text>
                        <View style={styles.select}>
                            <Picker
                                style={{height: 50}}
                                selectedValue={algorithm2}
                                style={{height: 50}}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAlgorithm2(itemValue)
                                }>

                                <Picker.Item label="..." value="" />
                                {
                                    secondOpt.map(value => (
                                        <Picker.Item key={value} label={value} value={value} />

                                    ))
                                }
                            </Picker>
                        </View>
                    </View>

                )}


            <Text>number of itens:</Text>
            <View style={styles.select}>

                <Picker
                    style={{height: 50}}
                    selectedValue={list}
                    style={{height: 50}}
                    placeholder={"errado"}
                    onValueChange={(itemValue, itemIndex) =>
                        setList(itemValue)
                    }>

                    <Picker.Item label="..." value="" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="100" value="100" />
                    <Picker.Item label="1000 " value="1000"/>
                    <Picker.Item label="5000 " value="5000"/>
                    <Picker.Item label="10000" value="10000"/>
                </Picker>
            </View>

            <TouchableOpacity onPress={sendOptions}
                              style={styles.button}>
                <Text>Go</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

Select.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4c51a1',
        justifyContent:'center',
        alignItems:'stretch',
        paddingHorizontal:40,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor: '#ddd',
        borderRadius:10,
        marginTop:15,
    },
    select:{
        borderRadius:10,
        backgroundColor:'#ddd',
    }
});

