//Define our labelmap
const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Yes', color:'blue'},
    3:{name:'No', color:'purple'},
    4:{name:'Thank You', color:'yellow'},
    5:{name:'I Love You', color:'lime'},
}

//Define a drawing function
// Define a drawing function
// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        //console.log(boxes[i], classes[i], scores[i], threshold);
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,b,a] = boxes[i]
            const text = classes[i]
            

            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = labelMap[text]['color']
            ctx.font = '30px Arial'         

            //console.log(labelMap[text]['name']);
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, (a-x)*imgWidth, (b-y)*imgHeight);
            ctx.stroke()

            //console.log(imgWidth);
            //console.log(imgHeight);
        }
    }
}