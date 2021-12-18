## **Signify Video Call ** <br /> <br />
### The aim of developing a real-time video call application is to accurately read the sign language and communicate with the signer in an automated sense, without having an expertise or even an introductory knowledge in that form of communication. It is real-time video call web application that recognize and extracts sign actions of the Sign Language from live video frame to frame by monitoring the continuous action movements performed by the signer. Signify Video Call helps the speech and hearing-impaired people communicate with each other easily and even the normal people can easily understand the conversation. <br /> <br />


## Steps
<br />
<b>Step 1.</b> Clone this repository
<br/><br/>
<b>Step 2.</b> Install Depdendencies. 
<pre>Run npm install in both server and client folder.</pre>
<br/><br/>
<b>Step 3.<br/>
</b> How to create an HTTP server locally and request model. 
<pre>Add this line in DetectSign.js file</pre>
<pre>const net = await tf.loadGraphModel("http://127.0.0.1:8080/model.json")</pre>
<br/><br/>
<b>Install HTTP server</b> 
<pre>npm install http-server -g</pre>
<br/><br/>
<b>Go to your model folder where “model.json” exists in CMD and run</b> 
<pre>http-server -c1 --cors .</pre>
<br/><br/>
<b>Step 4.</b> 
<pre>Run npm start in both server and client folder</pre>

## Screenshots <br/>
