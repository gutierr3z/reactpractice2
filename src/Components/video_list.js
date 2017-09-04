import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ( props ) => {
    // const videos = props;
    const vidItems = props.videos.map( ( item ) => {
        return (
            <VideoListItem 
                onVideoSelect = { props.onVideoSelect }
                key = { item.etag } 
                video = { item } />
        );
    });

    return (

        <ul className="video-list col-md-4 list-group">
            {/* { props.videos.length } */}
            { vidItems }
        </ul>

    );
};

export default VideoList;