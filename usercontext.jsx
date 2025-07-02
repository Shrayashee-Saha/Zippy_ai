import React, { createContext } from 'react'
export const dataContext = createContext();
import run from '../gemini'

function UserContext({children}) {
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = 'en-US';
    text_speak.rate = 0.9;
    text_speak.pitch = 1.1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt){
    let text=await run(prompt);
    speak(text);
  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition();
  recognition.onresult=(e)=>{
    let currentIndex=e.resultIndex;
    let transcript=e.results[currentIndex][0].transcript;
    console.log(transcript);
    takeCommand(transcript.toLowerCase());
  }

  function takeCommand(command){
    if(command.includes("open") && command.includes("youtube")){
      window.open("https://www.youtube.com", "_blank");
      speak("Opening YouTube for you");
    }
    else if(command.includes("open") && command.includes("google")){
      window.open("https://www.google.com", "_blank");
      speak("Opening Google for you");
    }
    else if(command.includes("open") && command.includes("github")){
      window.open("https://www.github.com", "_blank");
      speak("Opening GitHub for you");
    }
    else if(command.includes("open") && command.includes("facebook")){
      window.open("https://www.facebook.com", "_blank");
      speak("Opening Facebook for you");
    }
    else if(command.includes("open") && command.includes("twitter")){
      window.open("https://www.twitter.com", "_blank");
      speak("Opening Twitter for you");
    }
    else if(command.includes("open") && command.includes("instagram")){
      window.open("https://www.instagram.com", "_blank");
      speak("Opening Instagram for you");
    }
    else if(command.includes("open") && command.includes("linkedin")){
      window.open("https://www.linkedin.com", "_blank");
      speak("Opening LinkedIn for you");
    }
    else if(command.includes("open") && command.includes("whatsapp")){
      window.open("https://web.whatsapp.com", "_blank");
      speak("Opening WhatsApp for you");
    }
    else if(command.includes("open") && command.includes("gmail")){
      window.open("https://mail.google.com", "_blank");
      speak("Opening Gmail for you");
    }
    else if(command.includes("open") && command.includes("reddit")){
      window.open("https://www.reddit.com", "_blank");
      speak("Opening Reddit for you");
    }
    else if(command.includes("open") && command.includes("twitch")){
      window.open("https://www.twitch.tv", "_blank");
      speak("Opening Twitch for you");
    }
    else if(command.includes("open") && command.includes("spotify")){
      window.open("https://www.spotify.com", "_blank");
      speak("Opening Spotify for you");
    }
    else if(command.includes("open") && command.includes("netflix")){
      window.open("https://www.netflix.com", "_blank");
      speak("Opening Netflix for you");
    }
    else if(command.includes("open") && command.includes("discord")){
      window.open("https://www.discord.com", "_blank");
      speak("Opening Discord for you");
    }
    else if(command.includes('stop')){
      recognition.stop();
      speak('Stopped');
    }
    else{
      aiResponse(command);
    }
  }
  
  const value = {
  recognition,
  }

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext