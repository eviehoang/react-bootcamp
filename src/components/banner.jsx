import React, { useEffect, useRef, useState } from 'react';

async function typeSentence(sentence, setText, delay = 100, initialDelay = 4000) {
  const letters = sentence.split("");

  // Type the text
  for (let i = 0; i < letters.length; i++) {
    await waitForMs(delay);
    setText(prevText => prevText + letters[i]);
  }

  // Wait for an additional delay before starting the deletion
  await waitForMs(initialDelay);

  // Delete the text letter by letter with random deletion delays
  for (let i = 0; i < letters.length; i++) {
    const deletionDelay = 150; // Random delay for each iteration
    await waitForMs(deletionDelay);
    setText(prevText => prevText.slice(0, -1));
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function TypingComponent() {
  const [text, setText] = useState("");
  const sentenceRef = useRef(null);

  useEffect(() => {
    const loopTyping = async () => {
      while (true) {
        await typeSentence("Nhi Hoang", setText);
        // Add a longer delay before starting the next iteration
        await waitForMs(3000);
      }
    };

    loopTyping(); // Start the loop

    // Cleanup function to stop the loop when the component unmounts
    return () => {
      // Add any cleanup logic here
    };
  }, []); // Run the typing effect once on mount

  return (
    <div className="flex items-center justify-center mt-2 mx-3 h-8 Banner">
      <span ref={sentenceRef} className="sentence">{text}</span>
      <span className="input-cursor"></span>
    </div>
  );
}
