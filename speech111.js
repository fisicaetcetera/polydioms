// speech105.js:  
// 10.9 Speech Recognition with p5.speech
// Vai separar as palavras de uma frase.
//
  let lang;
  let voz;
  let speechRec;
  let continuous = true;
  let myVoice;
  let reply;
  let conf = 70;// default confidence level
  let confPercent;
  let ii;
  let frase; // Frase to be read by student
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'ru-RU', 'fr-FR', 'ar-SA', 'es-ES', 'it-IT', 'he-IL', 'hu-HU'];
  let vozes = ["Google US English", "Google deutsch" , "Google português do Brasil", "Google русский", "Google french", "Google arabic", "Google español", "Google italiano", "Google hebrew", "Google magyar"];
  let texto = '', texto1 ='';
  let texto2 = '';
  let fala = true;

  //
  //
  function setup() {
  createCanvas(1290,600);
  background('grey');
  textSize(40);  
    //  choose lang / voice
    button = createButton('Português');
    button.position(width/13, 10);
    button.mousePressed(Português);
    //
    button = createButton('English');
    button.position(2*width/13 + 12, 10);
    button.mousePressed(English);
    //
    button = createButton('Français');
    button.position(3*width/13 + 6, 10);
    button.mousePressed(Français);
    //
    button = createButton('العربية');
    button.position(4*width/13 + 8, 10);
    button.mousePressed(العربية);
    //
    button = createButton('Español');
    button.position(5*width/13-5, 10);
    button.mousePressed(Español);
    //
    button = createButton('Deutsch');
    button.position(width/13, 33);
    button.mousePressed(Deutsch);
    //
    button = createButton('Русский');
    button.position(2*width/13 + 12, 33);
    button.mousePressed(Русский);
     //
    button = createButton('Italiano');
    button.position(3*width/13 + 6, 33);
    button.mousePressed(Italiano);
    //
    button = createButton('עברית');
    button.position(4*width/13 + 8, 36);
    button.mousePressed(עברית);
    //
    button = createButton('Magyar');
    button.position(5*width/13-5, 33);
    button.mousePressed(Magyar);
    //
    myVoice = new p5.Speech('Google US English', gotVoice);
    function gotVoice(){
       myVoice.listVoices();
       console.log(myVoice.voices);
    }
} //setup
function draw(){
background('lightGrey');
textAlign(LEFT);
  textSize(40);
  textWrap(WORD);
  text(texto, width/13, 2*height/10, 700,200);
  textSize(20);
  text(texto1, width/13, 3*height/10 + 200);
  text(texto2, width/13, 3*height/10 + 240);
  texto2 = '';
} // draw
function Português() {
    createP("Fala = "+ fala);
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
    myVoice.speak(texto);
    console.log(voz);
    console.log("Fala = ", fala);
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
    myVoice.speak(texto);
    console.log(voz);
    //texto = 'Please,say something';
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
    myVoice.speak(texto);
    console.log(voz);
    ////createP("Version: 09092045");
    //createP(" S’il te plaît, dis quelque chose:");
}

  
function العربية() {
    //createP('العربية');
    texto = " أرجوك قل شيئا";
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
    myVoice.speak(texto);
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
    myVoice.speak(texto);
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
    myVoice.speak(texto);
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
    myVoice.speak(texto);
    console.log(voz);
}

    function Italiano() {
    texto = "Per favore dì qualcosa";
    texto1 ='';
    ii = 7;
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
    myVoice.speak(texto);
    console.log(voz);
}

// ''//
 
    function עברית() {
    texto = "בבקשה תגיד משהו";
    texto1 ='';
    ii = 8;
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
    myVoice.speak(texto);
    console.log(voz);
}
    //
 
    function Magyar() {
    texto = "Kérlek, mondj valamit";
    texto1 ='';
    ii = 9;
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
    myVoice.speak(texto);
    console.log(voz);
}

  function gotSpeech() {
    //textStyle(BOLD);
    console.log(speechRec);
    objeto = speechRec.resultString;
    // Separa objeto em palavras
    let palavras = split(objeto, ' ');
    comprimento = palavras.filter(word => word !== '').length;
    for (i=0; i <comprimento; i++){
       console.log(palavras[i] );
    }  
    //
    console.log("Dentro de gotSpeech",objeto);
    console.log("Fala = " + fala);
    confidence = speechRec.resultConfidence;
    confPercent = floor(confidence * 100);
    console.log(confPercent + "%");
    //createP("Frase = " + objeto  );
    //text(objeto, width/10,5*height/10);  
    Responde(); // analisa texto
    if(confPercent > conf){
       texto1 = ': ) '+ '   ' + confPercent + '%';
       texto2 = '';
       if(fala){
          myVoice.speak(texto);
       };   
     } else {
          texto1 = ': ( ' + '   ' + confPercent + '%';
          texto2 = texto + " ?????";
          createP(texto2);
      }
} // gotspeech

  function Responde(){
      if(objeto == "muito bem"){
      myVoice.speak('Obrigada!' + 'Vamos continuar?');
      texto = 'Diga algo mais...';
      texto1 = '';
      Português();
    } else if (objeto == "silêncio"){
      fala = false;
      createP(fala);
    } else if (objeto == 'pode falar'){
      fala = true; 
      createP(fala);
    } else {
      texto = objeto;
    }
    if (objeto == "Gabriela"){
     texto1 = "";
     texto = "Sim?";
    }
    if (objeto == "Cassandra"){
       texto1 = "";
       texto = "OK, mudando para Cassandra!";
       English();
    }
}
  //

