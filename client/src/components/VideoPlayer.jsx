import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../Context';
import DetectSign from '../signLang/DetectSign';
import videoStyles from './videoStyle.module.css';

const useStyles = makeStyles((theme) => ({
  video: {
    aspectRatio: 16 / 9,
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '0px solid black',
    backgroundColor: '#1e1e1e',
    // margin: '10px',
  },
  text: {
    color: '#fff'
  }
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  console.log(myVideo.current);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        {stream && (
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper}>
                  <Typography variant="h5" gutterBottom className={classes.text}>{name || 'Name'}</Typography>
                  <div className={videoStyles.videoContainer}>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    <DetectSign video={myVideo}/>
                  </div>
              </Paper>
            </Grid>
        )}
        {callAccepted && !callEnded && (
            <Grid item xs={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" gutterBottom  className={classes.text}>{call.name || 'Name'}</Typography>
                <div className={videoStyles.videoContainer}>
                  <video playsInline ref={userVideo} autoPlay className={classes.video} />
                  <DetectSign video={userVideo}/>
                </div>
              </Paper>
            </Grid>
        )}
      </Grid>
    </>
  );
};

export default VideoPlayer;