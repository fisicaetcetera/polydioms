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
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'ru-RU', 'fr-FR', 'ar-SA', 'es-ES'];
  let vozes = ["Google US English", "Google deutsch" , "Google portugês do Brasil", "Google русский", "Google french", "Google arabic", "Google español"];
  let texto = '', texto1 ='';
  //
  //
  function setup() {
  createCanvas(900,640);
  background('grey');
 
  
    //  choose lang / voice
    button = createButton('Português');
    button.position(width/13, 10);
    button.mousePressed(Portugues);
    //
    button = createButton('English');
    button.position(2*width/13, 10);
    button.mousePressed(English);
    //
    button = createButton('Français');
    button.position(3*width/13, 10);
    button.mousePressed(Français);
    //
    button = createButton('العربية');
    button.position(4*width/13, 10);
    button.mousePressed(العربية);
    //
    button = createButton('Español');
    button.position(5*width/13, 10);
    button.mousePressed(Español);
    //
    button = createButton('Deutsch');
    button.position(6*width/13, 10);
    button.mousePressed(Deutsch);
    //
    button = createButton('Русский');
    button.position(7*width/13, 10);
    button.mousePressed(Русский);
    //
    myVoice = new p5.Speech('Google US English', gotVoice);
    function gotVoice(){
       //createP("Vozes OK!");
       myVoice.listVoices();
       console.log(myVoice.voices);
    }
} //setup
function draw(){
background('lightGrey');
textAlign(LEFT);
  textSize(20);
  //fill('blue');
  text(texto, width/13, 2*height/10);
  text(texto1, width/13, 2.5*height/10);
} // draw
function Portugues() {
    //createP("Português");
    //
    texto = 'Por favor, diga algo';
    texto1 = '';
    redraw();
    fill('green');
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
    myVoice.setRate(1.2);
    myVoice.setPitch(random(0.7, 1.3));
    myVoice.setVoice(voz);
    console.log(voz);
    //createP("Versão 09092045");
    //createP(" diga algo");
}

  
function English() {
    //createP("English");
        //
    texto = 'Please,say something';
    texto1 ='';
    redraw();
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
    myVoice.setRate(0.8);
    myVoice.setPitch(random(0.7, 1.3));
    console.log(voz);
    texto = 'Please,say something';
    redraw();
    ////createP("Version: 09092045");
    //createP(" Say something:");
}

  
function Français() {
    //createP("Français");
    texto = " S’il te plaît, dis quelque chose:";
    texto1 ='';
    ii = 4;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(1.0);
    myVoice.setPitch(random(0.7, 1.3));
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    ////createP("Version: 09092045");
    //createP(" S’il te plaît, dis quelque chose:");
}

  
function العربية() {
    //createP('العربية');
    texto = " إصدار: .٩١٠٠٩٠٠";
    texto1 ='';
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
    ////createP("إصدار: .٩١٠٠٩٠٠");
}
  
    function Español() {
    //createP("Español - 09141154");
    texto = " Por favor di algo:";
    texto1 ='';
    
    ii = 6;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(1.2);
    myVoice.setPitch(random(0.7, 1.3));
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    ////createP("Version: 09102018");
    //createP(" Por favor di algo:");
}

  
    function Deutsch() {
    //createP("Deutsch");
    texto = " Bitte, etwas sagen:";
    texto1 ='';
    ii = 1;
    lang = idiomas[ii];
    //speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(1.0);
    myVoice.setPitch(random(0.7, 1.3));
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    ////createP("Version: 09102018");
    //createP(" Bitte, etwas sagen:");
}
 
    function Русский() {
    //createP("Русский");
    texto = " Пожалуйста, скажи что-нибудь:";
    texto1 ='';
    ii = 3;
    lang = idiomas[ii];
    //speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(0.8);
    myVoice.setPitch(random(0.7, 1.3));
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    console.log(voz);
    ////createP("Version: 09102018");
    //createP("Пожалуйста, скажи что-нибудь:");
}
  function gotSpeech() {
    console.log(speechRec);
    objeto = speechRec.resultString;
    console.log("Dentro de gotSpeech",objeto);
    confidence = speechRec.resultConfidence;
    confPercent = confidence * 100;
    console.log(confPercent + "%");
    //createP("Frase = " + objeto  );
    //text(objeto, width/10,5*height/10);
    texto = objeto;
    texto1 = '(Conf = ' + confPercent + ')';
    //createP(Confidence = confPercent+"%");   
    text(texto, width/10, 7*height/10);
    text(texto1, width/10, 11*height/10);
    if(confidence > conf){
       //createP(objeto);
       myVoice.speak(objeto);
       //createP("(" + confPercent + "%)"); 
       horatxt = createElement('h5', " " + objeto + " <b> Confidence =" + confidence);
     // greeting.html( objeto );
     } else {
     if(ii==5){
         //createP("من فضلك قل شيئا:");
     }  
      //createP(objeto + "?????");
  }  //confidence
} // gotspeech

function greet() {
  const palavra = input.value();
  greeting.html('Você digitou: ' + palavra + '!');
  input.value('');
}
  //

