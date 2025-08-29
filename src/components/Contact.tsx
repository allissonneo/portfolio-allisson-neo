// src/components/Contact.tsx

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2 >Contato</h2>
        <p className="description">
          Se você deseja entrar em contato comigo, basta preencher o formulário
          abaixo ou me enviar um email!
        </p>
        <form className="form-container">
          <div className="">
            <input
              type="text"
              // className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Seu nome"
            />
          </div>
          <div >
            <input
              type="email"
              // className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Seu e-mail"
            />
          </div>
          <div>
            <textarea
              // className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Sua mensagem"
            ></textarea>
          </div>
          <button
            type="submit"
            // className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
