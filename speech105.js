// speech105.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let voz;
  let speechRec;
  let continuous;
  let myVoice;
  let reply;
  let myName = "Cassandra";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling, humor;
  let intro = true;
  let conf = 0.5// default confidence level
  let confPercent;
  let frase; // Frase to be read by student
  let frases = ["Hello", "Bom dia", "Boa noite", "Bom apetite",
   "Que horas são?", "Quando ?", "How are you, Derek?"];
  let numeros = [0, 1, 2, 3];
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'es-Es'];
  let vozes = ["Google US English", "Google Deutsch" , "Google portugês do Brasil", "Google español"]
  function setup() {
    noCanvas();
    let ii = random(numeros); 
    console.log(ii);
    lang = idiomas[ii];
    console.log(lang);
    voz = vozes[ii];
    myVoice = new p5.Speech(voz);
    console.log(voz);
    myVoice.setLang(lang);
    myVoice.setVoice(voz);
    continuous = false;
    console.log("continuous = " + continuous);
    createP("Versão 09070708");
    frase = random(frases);
    console.log(frase);
    createP("say something / diga algo / sag etwas / di algo ");
} //setup
  
function mouseClicked() {
  if(intro){
    introduction();
  }
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
}


  function gotSpeech() {
    console.log(speechRec);
    objeto = speechRec.resultString;
    console.log(objeto);
    confidence = speechRec.resultConfidence;
    confPercent = confidence * 100;
    console.log(confPercent + "%");
    createP("Frase = " + objeto  );
    createP(Confidence = confPercent+"%");
    
  if(confidence > conf){
       myVoice.speak(objeto + "within" + confPercent + "percent."); 
     } else {
       createP("Please try again - click the mouse and repeat:");
       myVoice.speak(frase);
  }  //confidence
} // gotspeech

function recognize(){
  if (objeto == "who are you"){
      reply = "I am enivaldo's AI.  \n  He WROTE ME!";
      createP("I am enivaldo's AI.  \n  He WROTE ME!");
  } else if (objeto == "what's your name") {
      reply = "I am Cassandra, Enivaldo's personal AI";
      createP("I am Cassandra, Enivaldo's personal AI");
  } else if (objeto == "what time is it"){
      tempo();
      reply = "It is " +  hours + " hours and " + minutes+" minutes"; 
      createP("it is " +  hours + " hours and " + minutes+" minutes");
  } else if (objeto == "what day is it"){
      tempo();
      reply = "today is " + dia + " of " + mes + " of " + ano;
    createP("today is " + dia + " of " + mes + " of " + ano);
  } else if (objeto == "where are you from"){
    reply = "I am from Nat al , Brazil";
    createP("I am from Natal , Brazil");
  } else if (objeto == "how are you"){
    feel();
    reply = feeling;
    createP(feeling);
  } else {
     myVoice.speak( "Sorry ?");
     createP('Sorry');
     myVoice.speak('I am not sure you said   ' + objeto);
     myVoice.speak( "Can you say it again?" );
     createP('I am not sure you said   ' + objeto);
     createP('Can you say it again?');
  }  //if objeto
  } //recognize function

function tempo() {
  currentTime = new Date();
  dia = currentTime.getDate();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  mes = currentTime.getMonth() + 1;
  ano = currentTime.getFullYear();
  console.log(dia , mes, ano);
  }
function feel(){
  if(! humor){
    feeling = "I am not in a good mood. You should reload the program!";
  } else {
    feeling = "I am feeling good, thank you.  What about yourself?";
  }
}
function introduction(){
       myVoice.speak("Hello!  Click the mouse and say aloud frases or words in my language. 4 3 2 1 0. Repeat the click for each new word or frase") ;
       intro = false; 
}
