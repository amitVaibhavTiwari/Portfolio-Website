import "./Typewriter.scss";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "UI UX Designer",
          "Engineering Student",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
