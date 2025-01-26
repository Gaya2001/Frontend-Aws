import React, { useRef, useState } from "react";
import Navbar from "../Components/Nav/Navbar";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const messageContent = formData.get("message");

    if (!name || !email || !messageContent) {
      setMessage("All fields are required.");
      return;
    }

    emailjs
      .sendForm(
        "service_yn5ogg6",
        "template_dm2xz1t",
        form.current,
        "Igb8smYQzk1__zgPy"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setMessage("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Failed to send email.");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center justify-center text-3xl h-[89vh] w-screen font-semibold uppercase">
          <div className="p-6 border-4 border-gray-300">
            <div className="flex items-center p-5 border-b-4 border-gray-300">
              <label htmlFor="user_name" className="w-[180px]">
                Name
              </label>
              <input
                id="user_name"
                className="w-full h-full p-2 border-2 border-gray-300"
                type="text"
                name="user_name"
              />
            </div>

            <div className="flex items-center p-5 border-b-4 border-gray-300">
              <label htmlFor="user_email" className="w-[180px]">
                Email
              </label>
              <input
                id="user_email"
                className="w-full h-full p-2 border-2 border-gray-300"
                type="email"
                name="user_email"
              />
            </div>

            <div className="flex items-center p-5 border-b-4 border-gray-300">
              <label htmlFor="message" className="w-[180px]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border-2 border-gray-300"
              />
            </div>

            <div className="flex justify-center m-2">
              <input
                type="submit"
                value="Send"
                className="p-2 px-5 font-semibold text-white bg-green-600 rounded-md"
              />
            </div>

            {message && (
              <div className="text-center text-red-600">{message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
