import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Objava from './Objava.js';
import GlobalVariables from "../constants/GlobalVariables.js"


class CategoryApi extends React.Component{

    state={
        posts: [],
        isLoading: false,
        page: 1,
    };

    onRefresh() {
        this.setState({ isLoading: true }, function() { this.getPosts() 
       });
     }

    getPosts = async() => {
        let page = this.state.page;
        const response = await fetch(
          `https://superinfo.ba/wp-json/wp/v2/posts?categories=${GlobalVariables.category}&per_page=10&page=${page}`,
        )
        const data = await response.json();
        this.setState({posts: page === 1 ? data : [...this.state.posts, ...data], isLoading: false})
     }

     handleLoadMore = () => {
        this.setState(
          {
            page: this.state.page + 1,
          },
          () => {
            this.getPosts();
          },
        );
      };

      renderFooter = () => {
        if (this.state.isLoading) return null;
        return (
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };


    componentDidMount(){

        this.getPosts();
    }


    render(){

        return(
            <View>
            <FlatList
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isLoading}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
            style= {{marginTop: 20}}
            data={this.state.posts}
             keyExtractor={item => item.id + GlobalVariables.category}
            ListFooterComponent={this.renderFooter}
            renderItem={({item}) =>
            <View>
                 { <Objava navigation={this.props.navigation} content={item.content.rendered} date={item.date_gmt} title={item.title.rendered} image={item.jetpack_featured_media_url}  /> }
             </View>
                 }  />
         </View>

        )
    }
}

export default CategoryApi;