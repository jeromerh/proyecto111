//https://teachablemachine.withgoogle.com/models/xcYqd5bJ-/
prediccion1=""
prediccion2=""
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
})
camera=document.getElementById("camara")

Webcam.attach("#camara")

function take_snapshot(){
    Webcam.snap(function(foto){
    document.getElementById("resultado").innerHTML="<img id='imagen' src='"+foto+"'>"
    })
    document.getElementById("imegen")
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xcYqd5bJ-/model.jsno",modelLoaded)

function modelLoaded(){
console.log("modelo_cargado")
}

function speak(){
    synth=window.speechSynthesis;
    speak_date_one="La primera prediccion es"+prediccion1
    speak_date_two="La segunda preddicion es"+prediccion2
    var utterThis = new SpeechSynthesisUtterance(speak_data_one + speak_data_two);
    synth.speak(utterThis);

}
