// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// import Webcam from "react-webcam";
//import "./App.css";
// import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
import {drawRect} from "./utilities"; 

const DetectSign = ({video}) => {
  //console.log(video);
  // const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //const tf = require('@tensorflow/tfjs');
  const [canvasHeight, setCanvasHeight] = useState(0);
  const  [canvasWidth, setCanvasWidth] = useState(0);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await tf.loadGraphModel("http://127.0.0.1:8080/model.json")
    //const net = await tf.loadGraphModel("https://signlangmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json")
    console.log(net)

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    },500);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof video.current !== "undefined" &&
      video.current !== null &&
      video.current.readyState === 4
    ) {
      // Get Video Properties
      const video1 = video.current;
      const videoWidth = video.current.videoWidth;
      const videoHeight = video.current.videoHeight;

      // Set video width
      video.current.width = videoWidth;
      //console.log(video.current.width);
      video.current.height = videoHeight;
      //console.log(video.current.height);
      
      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      setCanvasHeight(videoHeight);
      setCanvasWidth(videoWidth);

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video1)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
     // console.log(net.executeAsync(expanded))
      const obj = await net.executeAsync(expanded)
      //console.log(await net.executeAsync(expanded))
      //console.log(obj);
      console.log(obj)

      
      const boxes = await obj[2].array()
      const classes = await obj[1].array()
      const scores = await obj[5].array()
    
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      //console.log(classes[0])

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);

  
  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        left: 0,
        top:0,
        zIndex:999,
        textAlign: "center",
        width: canvasWidth,
        height: canvasHeight,
      }}
    />
  );
}

export default DetectSign;