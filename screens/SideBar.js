import React from "react";
import { render } from "react-dom";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Drawer from "react-native-drawer";
import GlobalVariables from "../constants/GlobalVariables.js"

class SideBar extends React.Component{

    redirect = (value) => () =>{
        GlobalVariables.category = value;
        this.props.navigation.navigate("Category");
        this.props.drawerClose();
        this.props.handleStateDrawer();
    }
    redirectFocus = () =>{
        this.props.navigation.navigate("Root");
        this.props.drawerClose();
    }

    render(){

        return(

            <View style={styles.container}>
            <TouchableOpacity>
            <Image
                    source={require("../assets/images/logo.jpg")}
                    style={styles.slika}
                 />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.redirectFocus} style={styles.menu}>
                <Text style={styles.superinfo}>
                    FOKUS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(5)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    ŽIVOT+
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(2)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    MAJKA I DIJETE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(3)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    DOM I VRT
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(7)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    SCENA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(9)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    SPORT
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(10)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    GASTRO
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(8)} style={styles.menu}>
                <Text style={styles.superinfo}>
                    LIFESTYLE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(31)} style={styles.menuEco}>
                <Text style={styles.superinfoEco}>
                    ECO
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width:"100%",
      },
      slika:{
          alignSelf: "center",
          width: "90%",
          height: 70,
          marginTop: 40,
          marginBottom: 20
      },

    superinfo: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: "7%",
        textAlign: 'center',
    },
    superinfoEco:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: 'center',
        marginTop: "7%",
        // borderBottomWidth: 1,
        // borderColor: "#CED0CE"
    },
    menu:{
        backgroundColor: "#CE1632",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuEco:{
        backgroundColor: "green",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    }

});

export default SideBar;