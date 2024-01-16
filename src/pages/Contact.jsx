import { useState } from "react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiMail, HiOutlineArrowRight } from "react-icons/hi";

function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(userEmail);
  };

  const handleSendEmail = () => {
    if (!isEmailValid()) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); // Clear previous error message

    const encodedEmail = encodeURIComponent(userEmail);
    const encodedSubject = encodeURIComponent(userSubject);
    const encodedMessage = encodeURIComponent(userMessage);

    const mailtoLink = `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedMessage}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="block m-20">
      <h1 className="text-3xl text-white text-center underline mb-6">
        Contact Me
      </h1>
      <div className="m-auto w-2/4 flex-col contactBox">
        <div className="lg:w-1/2 mb-6">
          <div className="mb-1 block">
            <Label htmlFor="email4" value="E-mail" className="small" />
          </div>
          <TextInput
            id="email4"
            type="email"
            rightIcon={HiMail}
            placeholder="email@gmail.com"
            required
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setEmailError(""); // Clear error when typing
            }}
          />
          {emailError && (
            <div className="text-red-500 mt-1 ml-2 text-sm">{emailError}</div>
          )}
        </div>

        <div className="lg:w-1/2 mb-8">
          <div className="mb-1 block">
            <Label value="Subject" className="small" />
          </div>
          <TextInput
            id="subject"
            type="subject"
            placeholder="Subject Here"
            required
            value={userSubject}
            onChange={(e) => setUserSubject(e.target.value)}
          />
        </div>

        <div className="w-auto">
          <div className="mb-1 block">
            <Label htmlFor="Content" value="Content" />
          </div>
          <Textarea
            id="Message"
            placeholder="Send a message..."
            required
            rows={5}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleSendEmail}
            gradientDuoTone="cyanToBlue"
            size="sm"
          >
            Send
            <HiOutlineArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
