import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'YOUTUBE_API_ID';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  }

  componentWillMount() {
    this.searchYT('Youtube');
  }

  onPressSearch = term => { 
    this.searchYT(term);
  }

  searchYT = term => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ 
        loading: false,
        videos
      });
    })
  }
  render() {
    const { loading, videos } = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch} />
        <VideoList videos={videos} />
      </View>
    );
  }
}


