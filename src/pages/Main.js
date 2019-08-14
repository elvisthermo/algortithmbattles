import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Image,SafeAreaView,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';

import Barchart from './Barchart';
import logo from '../assets/logo.png';

import swicthAlgoritm from '../Js/swichAlgoritm';


export default function Main({navigation}){
    const [labels,setLabels] = useState([]);
    const [values,setValues] = useState([]);
    const algorithm1 = navigation.getParam('algorithm1');
    const algorithm2 = navigation.getParam('algorithm2');
    const list = navigation.getParam('list');
    const [complet,setComplet] = useState(false);

    useEffect(()=>{
        async function useAlgorithms() {

         if(algorithm1==='all'){
             let times = await swicthAlgoritm(algorithm1,list);

             let tempLabels = [];
             let tempValues = [];
             times.map((arr) =>{
                 tempLabels.push(arr[0]);
                 tempValues.push(arr[1]);
             })
             setValues(tempValues);
             setLabels(tempLabels);

             return  setComplet(true);
         }
           let times = await swicthAlgoritm(algorithm1,list);
           let times2 = await swicthAlgoritm(algorithm2,list);
            let tempLabels = [times[0],times2[0]];
            let tempValues = [times[1],times2[1]];
           setLabels(tempLabels);
           setValues(tempValues);

            return  setComplet(true);
        }
        useAlgorithms();
    },[]);

    return(
        <SafeAreaView  style={styles.container}>
            <ScrollView>


            <TouchableOpacity >
                <Image source={logo}  style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
            {complet===false &&(
                <ActivityIndicator size="large" color="#fff" />
                )}

            {labels.length!==0 && values.length!==0?
                (
                    <View style={styles.graph}>
                        <Barchart values={values} labels={labels}/>
                    </View>
                    )
                    :null}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#455bd1',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',

    },
    graph:{
      alignItems:'center',
      justifyContent: 'center',
      alignSelf:'center',
    }

});

