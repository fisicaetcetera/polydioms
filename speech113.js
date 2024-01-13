// speech113.js:
// Including Chinese  
//Google 普通话（中国大陆）, 
// v112 Speech Recognition with p5.speech
// Quando você chama o nome, indica que segue um comando.
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
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'ru-RU', 'fr-FR', 'ar-SA', 'es-ES', 'it-IT', 'he-IL', 'hu-HU', 'zh-CN'];
  let vozes = ["Google US English", "Google deutsch" , "Google português do Brasil", "Google русский", "Google french", "Google arabic", "Google español", "Google italiano", "Google hebrew", "Google magyar", "Google 普通话（中国大陆)"];
  let texto = '', texto1 ='';
  let texto2 = '';
  let fala = true;
  let comando = false;

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
    button = createButton('中文');
    button.position(width/13, 56);
    button.mousePressed(中文);
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
  textSize(30);
  textWrap(WORD);
  text(texto, width/13, 2*height/10, 500,300);
  textSize(20);
  text(texto1, width/13, 3*height/10 + 200);
  text(texto2, width/13, 3*height/10 + 240);
  texto2 = '';
} // draw
function Português() {
    if(comando){
          texto = 'Sim?';
       } else {
          texto = "Por favor, diga algo...";
          texto1 = 'Gabriela';
       }   
    texto1 = 'Gabriela';
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
    myVoice.setPitch(random(0.7, 1.0));
    myVoice.setVoice(voz);
    if(fala){myVoice.speak(texto); }
    console.log(voz);
    console.log("Fala = ", fala);
    //createP("Versão 09092045");
    //createP(" diga algo");
}

  
function English() {
    //createP("English");
        //
    texto = 'Please,say something';
    texto1 ='Cassandra';
    //redraw();
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
    if(fala){myVoice.speak(texto); }
    console.log(voz);
    //texto = 'Please,say something';
    //redraw();
    ////createP("Version: 09092045");
    //createP(" Say something:");
}

  
function Français() {
    //createP("Français");
    texto = " S’il te plaît, dis quelque chose:";
    texto1 ='Marie';
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
    console.log(voz);
    ////createP("Version: 09102018");
    //createP(" Por favor di algo:");
}

  
    function Deutsch() {
    //createP("Deutsch");
    texto = " Bitte, etwas sagen:";
    texto1 ='Gisela';
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
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
    if(fala){myVoice.speak(texto); }
    console.log(voz);
}
    //
 
    function 中文() {
    //texto = "请说句话";
    texto = '我叫美琳';
    texto1 ='MêiLin';
    ii = 10;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(0.05);
    myVoice.setPitch(random(0.7, 1.3));
    voz = vozes[ii];
    myVoice = new p5.Speech();
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    if(fala){myVoice.speak(texto); }
    console.log(voz);
}
    //
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
    console.log("Dentro de gotSpeech: ",objeto);
    console.log("Fala = " + fala);
    confidence = speechRec.resultConfidence;
    confPercent = floor(confidence * 100);
    console.log(confPercent + "%");
    //createP("Frase = " + objeto  );
    //text(objeto, width/10,5*height/10); 
    if(comando == false){
      Responde(); // analisa texto, se não for comando
    } else {
      Comandos();
    }  
    if(confPercent != 0){
    if(confPercent > conf){
       texto1 = ': ) '+ '   ' + confPercent + '%';
       texto2 = '';
           createP(texto);
       if(fala){
          myVoice.speak(texto);
       };   
     } else {
          texto1 = ': ( ' + '   ' + confPercent + '%';
          texto2 = texto + " ?????";
          //createP(texto2);
      }
      conf = 0;
      }
} // gotspeech
  function Responde(){
      if(objeto == "muito bem"){
      myVoice.speak('Obrigada!' + 'Vamos continuar?');
      Português();
    } else {
      texto = objeto;
    }
    if (objeto == "Gabriela"){
     texto1 = "";
     comando = true;
     texto = "Posso ajudar?";
     Português();
    }
     if (objeto == "Marie"){
     texto1 = "";
     texto = "Oui?";
    }
    
        if (objeto == "go to Portuguese"){
       texto1 = "";
       texto = "OK, switching to Portuguese!";
       Português();
       }

      if (objeto == "passer au portugais"){
       texto1 = "Ok, je passe au portugais";
       texto = "Ok, je passe au portugais!";
       Português();
      }  
      if (objeto == "qual é o seu nome"){
       texto1 = "Gabriela";
       texto = "Meu nome é Gabriela";
      }        
 } //Function responde()
  //
function Comandos(){
       comando == false;
       if (objeto == "vá para o francês"){
       texto1 = "OK, mudando para Francês!";
       texto = "OK, mudando para Francês!";
       Français();
      } else if (objeto == "silêncio"){
      fala = false;
      //createP(fala);
    } else if (objeto == 'pode falar'){
      fala = true; 
      //createP(fala);
    } else if (objeto == "vá para o inglês"){
       texto1 = "OK, mudando para Inglês!";
       texto = "OK, mudando para Inglês!";
       English();
    }
    comando = false; 
} //function comandos

