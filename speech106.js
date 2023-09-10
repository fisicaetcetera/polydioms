// speech105.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let voz;
  let speechRec;
  let continuous;
  let myVoice;
  let reply;
  let conf = 0.7// default confidence level
  let confPercent;
  let ii;
  let frase; // Frase to be read by student
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'es-Es', 'fr-FR', 'ar-SA', 'es-ES'];
  let vozes = ["Google US English", "Google Deutsch" , "Google portugês do Brasil", "Google español", "Google french", "Google arabic", "Google español"];
  function setup() {
    noCanvas();
    //  choose lang / voice
    button = createButton('Português');
    button.position(120, 0);
    button.mousePressed(Portugues);
    //
    button = createButton('English');
    button.position(200, 0);
    button.mousePressed(English);
    //
    button = createButton('Français');
    button.position(263, 0);
    button.mousePressed(Français);
    //
    button = createButton('العربية');
    button.position(332, 0);
    button.mousePressed(العربية);
    //
    button = createButton('Español');
    button.position(386, 0);
    button.mousePressed(Español);
    //
    myVoice = new p5.Speech('Google US English', gotVoice);
    function gotVoice(){
       createP("Vozes OK!");
       myVoice.listVoices();
       console.log(myVoice.voices);
    }
} //setup

  
function Portugues() {
    createP("Português");
    ii = 2;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    //myVoice = new p5.Speech();
    //myVoice.listVoices();
    myVoice.setLang(lang);
    myVoice.setRate(1.2)
    myVoice.setVoice(voz);
    console.log(voz);
    createP("Versão 09092045");
    createP(" diga algo");
}

  
function English() {
    createP("English");
    ii = 0;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    //createP("Version: 09092045");
    createP(" Say something:");
}

  
function Français() {
    createP("Français");
    ii = 4;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    //createP("Version: 09092045");
    createP(" S’il te plaît, dis quelque chose:");
}

  
function العربية() {
    createP('العربية');
    ii = 5;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    createP("إصدار: .٩١٠٠٩٠٠");
}
  
    function Español() {
    createP("Español");
    ii = 6;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    //createP("Version: 09102018");
    createP(" Por favor di algo:");
}



  function gotSpeech() {
    console.log(speechRec);
    objeto = speechRec.resultString;
    console.log("Dentro de gotSpeech",objeto);
    confidence = speechRec.resultConfidence;
    confPercent = confidence * 100;
    console.log(confPercent + "%");
    //createP("Frase = " + objeto  );
    //createP(Confidence = confPercent+"%");
    
  if(confidence > conf){
       createP(objeto);
       myVoice.speak(objeto);
       createP("(" + confPercent + "%)"); 
     } else {
     if(ii=5){
         createP("من فضلك قل شيئا:");
     }  else {    
       createP("Tente novamente...:");
     }
      createP(objeto + "?????");
  }  //confidence
} // gotspeech

