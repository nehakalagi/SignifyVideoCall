## ** Signify Video Call ** <br /> <br />
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
</b>Add this line in DetectSign.js file
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
<br/><br/>
## Screenshots <br/>

![](https://user-images.githubusercontent.com/32827938/146651687-f851715c-0b99-4b7e-9969-4747e256e2dc.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651689-3fb4c091-bad0-4bcc-a457-ce8e0c94a3ef.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651690-c5fdeae0-df65-48d1-a17b-e04ccb0eb817.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651694-a215d362-1635-481b-be08-1d2a82f3426f.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651695-cafd761e-52ce-4ece-b384-0c51b9d7814d.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651696-d3413e98-de07-4207-8f48-452f05ae1f54.png) <br/><br/>
![](https://user-images.githubusercontent.com/32827938/146651697-e49de30e-406f-447d-9986-49f3672caf47.png) <br/><br/>

