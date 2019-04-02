import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Typography } from '@material-ui/core';

class VideoPlayer extends Component{
    render(){
        return(<div>	
            <div className='videoPlayer'>
                <div className='textBeforeVid'>
                    <Typography component='h2' variant='display2'>
                        Vewr Pre-Alpha
                    </Typography>
                </div>
                <div className='video'>
                    <ReactPlayer controls url='https://ipfstube.erindachtler.me/ipfs/QmU1GSqu4w29Pt7EEM57Lhte8Lce6e7kuhRHo6rSNb2UaC' />
                </div>
            </div>
    </div>
        )
    }
}

export default VideoPlayer;