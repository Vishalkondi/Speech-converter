const textArea = document.querySelector('textarea');
const buttonEl = document.getElementById('convert');

function convertSpeech(){
    let textValue = textArea.value;
    console.log('convert');
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(textValue);
    synth.speak(utter);
    if(textValue.length <= 0){
        alert('please Enter something ')
    }
}

buttonEl.addEventListener('click', convertSpeech);