// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous;
  let voice;
  let reply;
  let myName = "Cassandra";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling, humor;
  
  function setup() {
  noCanvas();
  lang = 'en-US';
    introduction();
    console.log("continuous = random");
    rnd = random(0,1);
    if(rnd < 0.5){
      continuous = false;
      console.log("Cassandra is lucid now");
      humor = true;
    } else {
      continuous = true;
      console.log("Cassandra unstable now");
      humor = false;
      introduction();

    }
    console.log("continuous = " + continuous);
    createP("Versão 09062019");
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
}


  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
    console.log(objeto);
    recognize();
    voice.speak(reply);
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     
  if(confidence > 0.6){
     //voice.speak("I think you said" + objeto);
     createP("I think you said:  " + objeto);
     
     objeto = null;
     
  } else {
    
     voice.speak( "Sorry ?");
     createP('Sorry');
     voice.speak('I do not know what' + objeto + 'means!');
     //voice.speak( "Can you say it again?" );
     createP('I heard ' + objeto);
     createP('Can you say it again?');
     objeto = null;
     
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
     voice.speak( "Sorry ?");
     createP('Sorry');
     voice.speak('I am not sure you said   ' + objeto);
     voice.speak( "Can you say it again?" );
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
       voice = new p5.speech();
       voice.speak("Hello!  I am Cassandra.");
       voice.speak("My Brazilian friend will teach you brazilian pronunciation.");
       voice.speak("You will seldom hear me,  I will only type remarks, inEnglish, to guide you.")  
}
