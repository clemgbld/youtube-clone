import { useState } from "react";
import classes from "./InputVocal.module.css";
import { AiFillAudio } from "react-icons/ai";
import { AiOutlineAudioMuted } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";

const appId = "3390d2db-4554-4b78-8250-a1c744a883e9";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const InputVocal: React.FC<{
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearchTerm }) => {
  const [isMicOpen, setIsMicOpen] = useState(false);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div></div>;
  }

  const startVocalSearch = () => {
    setIsMicOpen(true);
    SpeechRecognition.startListening({ language: "en-US" });
  };

  const stopVocalSearch = () => {
    setSearchTerm(transcript.toLowerCase());
    setIsMicOpen(false);

    SpeechRecognition.stopListening();
  };

  return (
    <div suppressHydrationWarning={true}>
      {isMicOpen && process.browser && (
        <div onClick={stopVocalSearch}>
          <div className={classes.listening}>
            <AiOutlineAudioMuted />
          </div>
        </div>
      )}

      {!isMicOpen && process.browser && (
        <div onClick={startVocalSearch}>
          <div className={classes["not-listening"]}>
            <AiFillAudio />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputVocal;
