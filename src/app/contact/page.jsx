"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* form container */}

        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-4/5 lg:w-1/2 flex flex-col justify-center gap-8 rounded-xl text-xl bg-red-50 p-24 m-4"
        >
          <span>Dear Miro Dev</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          ></textarea>

          <span>My mail address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
          />
          <button className="bg-black text-white p-4 rounded-xl">Send</button>
          {success && (
            <span className="text-green-600 font-semibold">
              Message sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Message failed to send
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
