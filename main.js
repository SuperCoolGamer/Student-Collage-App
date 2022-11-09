var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition()

function start(){
document.getElementById("textbox").innerHTML= "";
recognition.start();




}


recognition.onresult= function(event){

    console.log(event)

    var content= event.results[0][0].transcript

 document.getElementById("textbox").value= content

 if (content=="take my selfie"){

    speak();
}
}


function speak(){

var synth= window.speechSynthesis;

var speak_text= "taking selfie in 3 seconds---"

var utterThis= new SpeechSynthesisUtterance(speak_text);

synth.speak(utterThis);
Webcam.attach("#liveweb")

setTimeout(function()
{
    take_snapshot();
} , 3000

)
}


Webcam.set({
width:250,
height:190,
image_format: 'png',
png_qaulity: 96,



})

function take_snapshot(){

    Webcam.snap(function (data_url){
        document.getElementById("result").innerHTML=" <img id='selfie_image' src='"+data_url+"'></img>"
    })
    
    save()
    
    
    }
    
    
    function save(){
    
    link=document.getElementById("link");
    selfie=document.getElementById("selfie_image").src;
    link.href= selfie
    link.click()
    
    }