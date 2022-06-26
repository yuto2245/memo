 //tab1の音声入力//

 //音声認識の準備
 const speech1 = new webkitSpeechRecognition();
 speech1.lang = 'ja-JP';
 //使用する変数を用意
 const btn1 = document.getElementById('speech-btn1');
 const content1 = document.getElementById('1');
 btn1.addEventListener('click' , function() {
     // 音声認識をスタート
     speech1.start();
 });
 //音声自動文字起こし機能
 speech1.onresult = function(e) {
          speech1.stop();
          if(e.results[0].isFinal){
              var autotext =  e.results[0][0].transcript
              console.log(e);
              console.log(autotext);
              content1.innerHTML +=  autotext +"。";
           }
      }
      speech1.onend = () => { 
         speech1.start() 
      };


//tab2の音声入力//

 //音声認識の準備
 const speech2 = new webkitSpeechRecognition();
 speech2.lang = 'ja-JP';
 //使用する変数を用意
 const btn2 = document.getElementById('speech-btn2');
 const content2 = document.getElementById('2');
 btn2.addEventListener('click' , function() {
     // 音声認識をスタート
     speech2.start();
 });
 //音声自動文字起こし機能
 speech2.onresult = function(e) {
          speech2.stop();
          if(e.results[0].isFinal){
              var autotext =  e.results[0][0].transcript
              console.log(e);
              console.log(autotext);
              content2.innerHTML +=  autotext +"。";
           }
      }
      speech2.onend = () => { 
         speech2.start() 
      };


//tab3の音声入力//

 //音声認識の準備
 const speech3 = new webkitSpeechRecognition();
 speech3.lang = 'ja-JP';
 //使用する変数を用意
 const btn3 = document.getElementById('speech-btn3');
 const content3 = document.getElementById('3');
 btn3.addEventListener('click' , function() {
     // 音声認識をスタート
     speech3.start();
 });
 //音声自動文字起こし機能
 speech3.onresult = function(e) {
          speech3.stop();
          if(e.results[0].isFinal){
              var autotext =  e.results[0][0].transcript
              console.log(e);
              console.log(autotext);
              content3.innerHTML +=  autotext +"。";
           }
      }
      speech3.onend = () => { 
         speech3.start() 
      };