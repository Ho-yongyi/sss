                                                                                                                                                                                                                                                                                                                                                                        status = "";
img ="";
resul = [];
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", moadLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
}
function draw()
{
    image(img, 0, 0, 300, 300);
    if(status != "")
    {
        for(i=0; i<resul.length;i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Dectected";

            fill("#FF0000");
            percent = floor(resul[i].confidence * 100);
            text(resul[i].label + " "+ percent + "%", resul[i].x, resul[i].y);
            noFill();
            stroke("#FF0000");
            rect(resul[i].x, resul[i].y, resul[i].width, resul[i].height);
       }
     }
//     fill("red");
//     text("dog", 100, 100);
//     stroke("red");
//     noFill();
//     rect(150, 150, 250, 250);

//     noFill();
//     stroke("red");
//     rect(250, 200, 100, 100);
//     fill("red");
//     text("cat", 250, 210);
}
function moadLoaded()
{
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results)
{
    if(error)
    [
        console.error("error")
    ]
    else
    {
        console.log(results);
        resul = results;
    }
}
