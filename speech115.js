// speech113.js:
// Including Chinese  
//Google 普通话（中国大陆）, 
// v112 Speech Recognition with p5.speech
// Quando você chama o nome, indica que segue um comando.
//Nessa: a chinesa seráperguntada o nome em inglês.  Responde em Chinês.-a fazer
// Versão 115 para escrever dicas de palavras para a pessoa pronunciar
  let lang;
  let voz;
  let speechRec;
  let continuous = true;
  let myVoice;
  let reply;
  let conf = 70;// default confidence level
  let confPercent;
  var h5;
  var paragrafo;
  let frase; // Frase to be read by student
  let idiomas = ['en-US', 'de-DE', 'pt-BR', 'ru-RU', 'fr-FR', 'ar-SA', 'es-ES', 'it-IT', 'he-IL', 'hu-HU', 'zh-CN'];
  let vozes = ["Google US English", "Google deutsch" , "Google português do Brasil", "Google русский", "Google français", "Google arabic", "Google español", "Google italiano", "Google hebrew", "Google magyar", "Google 普通话（中国大陆)"];
  let texto = '', texto1 ='';
  let texto2 = '';
  let fala = true;
  let comando = false;
  let objeto;
  let qualDica = 'dicaPortuguês';
  let qualDica1 = '';
  let qualDica2  = '';
  let dicasPinyin = [ 'Zhōngwén', 'nǐ hǎo', 'nǐ hǎo ma?', 'Wǒ de míngzì shì...', 'Wǒ shì...', 'Wǒ shì yī míng lǎoshī', 'wǒ shì yī míng lǎoshī', 'wǒ shì bāxī rén', 'wǒ shì bāxī rén', 'bāxī rén', 'bāxī rén', 'wǒ xuéxí zhōngwén', 'wǒmen xué zhōngwén', 'nǐ xué zhōngwén', 'wǒ gēgē xué zhōngwén', 'wǒ bàba xué zhōngwén', 'wǒ dìdì xué zhōngwén', 'wǒ mèimei yě xué zhōngwén', 'Wǒ shuōhuà', 'nǐ shuōhuà', 'tā shuōhuà', 'wǒmen shuōhuà', 'nǐ shuōhuà', 'tāmen shuōhuà'];
  let dicasChinês = ['中文', '你好', '你好吗？', '我的名字是...', '我是...', '我是一名老师', '我是一名老师', '我是巴西人', '我是巴西人', '巴西人', '巴西人', '我学习中文', '我们学中文', '你学中文', '我哥哥学中文', '我爸爸学中文', '我弟弟学中文', '我妹妹也学中文', '我说话', '你说话', '他说话', '我们说话', '你说话', '他们说话'];
  let dicasPortuguês = ['idioma chinês', 'olá', 'como vai?', 'meu nome é ...', ' Eu sou ...', 'Eu sou professor', 'Eu sou professora', 'Eu sou brasileiro', 'Eu sou brasileira', 'Brasileiro', 'Brasileira', 'Eu estudo Chinês', 'Nós estudamos Chinês', 'Vocês aprendem Chinês', 'Meu irmão mais velho estuda Chinês','Meu papai estuda Chinês','Meu irmão mais novo estuda Chinês','Minha irmã mais nova também','Eu falo','você fala','ele fala','nós conversamos','você fala','eles falam'];
  let dicasRusso = ['Привет!',' Как дела?','Меня зовут Путин','Как тебя зовут?','Доброе утро','Добрый день','Добрый вечер','Увидимся позже','Пока','Это моя жена','Это моя дочь','Мой сын','Мой отец','Моя мама','Мой брат','Моя сестра','Вы говорите по-русски?','Французский','Португальский','Английский','Китайский','Японский','Спасибо','Пожалуйста','Пожалуйста','Я бразилец','Он бразилец','Она бразильянка','Мы бразильцы','Вы русские?','Я','Вы','Он','Она','Мы','Они','Они'];
let randomChoice;
let dicasTotal;
let ii;
  //
  function setup() {
  createCanvas(1290,600);
  background('grey');
    dicasTotal = dicasPortuguês.length; 
    randomChoice = int(random(dicasTotal));
    console.log(dicasTotal, randomChoice);
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
  textSize(25);
  text(texto2, width/13, 3*height/10 + 240);
  text(texto, width/13, 2*height/10, 500, 320);
  textSize(15);
  text(texto1, 3*width/8, height-55);
  texto2 = '';
  if(ii==10){
    let sss = qualDica[randomChoice];
    text(sss, width/13, height-80);
    let sss1 = qualDica1[randomChoice];
    text(sss1, width/13, height-55); 
    let sss2 = qualDica2[randomChoice];
    text(sss2, width/13, height-30);
    } else if (ii == 3) {
       let sss3 = qualDica[randomChoice];
       text(sss3, width/13, height-80);
    }

} // draw
function Português() {
    name = 'Gabriela';
    if(comando){
          texto = 'Sim?';
       } else {
          texto = "Por favor, diga algo...";
       }   
    texto1 = 'Gabriela';
    fill('green');
    ii = 2;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    voz = vozes[ii];
    myVoice.setLang(lang);
    myVoice.setRate(1.2);
    myVoice.setPitch(random(0.7, 1.0));
    myVoice.setVoice(voz);
    if(fala){myVoice.speak(texto); }
    console.log(voz);
    console.log("Fala = ", fala);
}

  
function English() {
    name = 'Cassandra';
    texto = 'Please,say something';
    texto1 ='Cassandra';
    fill('blue');
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
}

  
function Français() {
    name = 'Marie';
    texto = " S’il te plaît, dis quelque chose:";
    texto1 ='Marie';
    fill('black');
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
    name = 'Sarah';
    fill('black');
    texto = " أرجوك قل شيئا";
    texto1 ='Sarah(سارة)';
    
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
    name = 'Gaston';
    texto = " Por favor di algo:";
    texto1 ='Gaston';
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
    name  =  'Gisela';
    fill('black');
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
}
    function Русский() {
    name = 'Motya';
    texto = " Пожалуйста, скажи что-нибудь:";
    texto1 ='Motya (Mãtiá)';
    ii = 3;
    qualDica = dicasRusso;
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
    name = 'Gianne';
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
    name = 'Tamar, תמר'
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
    name = 'Zsófia';
    texto = "Kérlek mondj valamit";
    texto1 ='Zsófia';
    ii = 9;
    lang = idiomas[ii];
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    console.log(ii, idiomas[ii]);
    console.log(lang);
    myVoice.setRate(1.0);
    myVoice.setPitch(random(0.7, 1.3));

    console.log(voz);
}
    //
 
    function 中文() {
    name = '北海';
    fill('black');
    texto = "请说句话";
    name = '北海';
    texto1 ='(北海  = Běihǎi)';
    qualDica = dicasChinês;
    qualDica1 = dicasPinyin;
    qualDica2 = dicasPortuguês;
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

}

    //
  function gotSpeech() {
    //textStyle(BOLD);
   
    console.log('random choice = ' + randomChoice);
    console.log(speechRec);
    objeto = speechRec.resultString;
    objeto = objeto.toLowerCase();
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
    randomChoice = int(random(dicasTotal));
    console.log('randomChoice = ', randomChoice);

    if(comando == false){
      Responde(); // analisa texto, se não for comando
    } else {
      Comandos();
    }  
    if(confPercent != 0){
       if(fala){
          myVoice.speak(texto);
       };   
     } 
} // gotspeech
  function Responde(){
      if (objeto == "muito bem"){
      myVoice.speak('Obrigada!' + 'Vamos continuar?');
      Português();
    } else {
      texto = objeto;
    }
    if (objeto == "gabriela"){
     texto1 = "";
     comando = true;
     texto = "Posso ajudar?";
     Português();
    }
     if (objeto == "marie"){
     texto1 = "";
     texto = "Oui?";
    }
    
        if (objeto == "go to portuguese"){
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
      if(texto == "你的名字是什么"){
        texto = "我叫北海";     
      texto1 = 'Wǒ de míngzì jiào Běihǎi';
      console.log('dentro do if;;;;;');
      }   
            if(texto == "what's your name"){
        texto = "My name is " + ' ' + name;     
      //texto1 = 'Wǒ de míngzì jiào Běihǎi';
      console.log('dentro do if;;;;;');
      }    
                 if(texto == "what is your name"){
        texto = "My name is " + ' ' + name;     
      //texto1 = 'Wǒ de míngzì jiào Běihǎi';
      console.log('dentro do if;;;;;');
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
    } else if (objeto == 'pode falar'){
      fala = true; 
    } else if (objeto == "vá para o inglês"){
       texto1 = "OK, mudando para Inglês!";
       texto = "OK, mudando para Inglês!";
       English();
    }
    comando = false; 
} //function comandos

