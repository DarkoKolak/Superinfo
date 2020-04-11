import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalVariables from "../constants/GlobalVariables.js";


class PocetnaObjava extends React.Component{

    changeDate = (date) =>{
        const stringDate = date.substring(0,10);
        const day = stringDate.substring(8);
        const month = stringDate.substring(5,7);
        const year = stringDate.substring(0,4);
        return(
            <Text style={{paddingTop: 0}}>
                {day}.{month}.{year}
            </Text>
        )
    }
    cutString = (string) => {

        if(string.length > 70 ){
            let output1 = string.substring(0,70);
            let output2 = string.substring(70);
            let output3 = output2.substring(0,output2.indexOf(" ")+1) + "...";
            const toReturn = output1 + output3 ;
            
            return(
                toReturn
            )
        }
        return string;

    }

    onPress= (image,content,title) =>{
            GlobalVariables.image= image;
              const special = "&nbsp;";
              let result = content.replace(/&nbsp;/g, '');
              let result2 = result.split("The post");
            GlobalVariables.content = content;
            GlobalVariables.title = title;
            this.props.navigation.navigate("Posts")

    }

    

    render(){
        let image = this.props.image;
        return(
            <TouchableOpacity onPress={() => this.onPress(image,this.props.content,this.props.title)}>
            <View style={styles.objava}>
            <View style={styles.kontainerslike}>
                 <Image
                    source={{uri:image}}
                    style={styles.slika}
                 />
            </View>
            <View style={styles.textBox}>
                 <Text style={styles.textObjave}>
                    {this.cutString(this.props.title)}
                 </Text>
                 <Text style={styles.datum}>
                 {this.changeDate(this.props.date)}
                 </Text>
                 <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
                 </View>
            </View>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
        objava: {
            width: "90%",
            height: 300,
            marginBottom: 15,
            alignSelf: "center",
            // flex: 2,
            // flexDirection:'row'
            

        },
        kontainerslike: {
            height: "70%",
            width: "100%"

        },
        slika: {
            width: "100%",
            alignSelf: "center",
            height: "100%",
            width: "100%"

        },
        textObjave: {
            width: "100%",
            fontStyle: "italic",
            fontSize: 17,
            height: "100%"
            
        },
        textBox:{
            marginTop: "3%",
        },
        datum: {
            marginTop: "2%",
        }


});


export default PocetnaObjava;