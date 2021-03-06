import React from 'react';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';

const WatchButton = ({ videoID }) => (
    <Button 
        raised
        title="Watch on YouTube"
        //icon={{ name: 'play-arrow'}}
        containerViewStyle={{ marginTop: 10 }}
        backgroundColor="#2793e8"
        onPress={() => {
            WebBrowser.openBrowserAsync(
                `https://m.youtube.com/watch?v=${videoID}`
            )
        }}
    />
);

export default WatchButton;