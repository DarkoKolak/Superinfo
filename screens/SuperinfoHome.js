import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Objava from "../components/Objava.js";
import Api from "../components/api.js";
import Drawer from 'react-native-drawer';
import SideBar from "../screens/SideBar.js";
import {Context} from "../App.js";


class SuperinfoHome extends React.Component{


    closeControlPanel = () =>{
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };


    render(){

        return(
            <View style={styles.container}>
            <Context.Consumer>
            {data =>
                <Drawer
        open={data.drawerOpen}
        openDrawerOffset={0.3}
        ref={(ref) => this._drawer = ref}
        content={<SideBar navigation={this.props.navigation} handleStateDrawer={data.handleChange} drawerClose = {this.closeControlPanel} />}
        >
        
            <Api navigation={this.props.navigation}/>
      </Drawer>
            }
      </Context.Consumer>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:"100%",
      },

    superinfo: {
        color: "red",
        fontSize: 70,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: 'center',
        marginTop: "70%"
    }

});

export default SuperinfoHome;