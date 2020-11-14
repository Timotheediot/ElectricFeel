import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  return (
    <div>
      <form
        className="w-full flex flex-col pt-3 md:pt-8 md:justify-center justify-center bg-gray-800 mt-10 pb-10"
        // onSubmit="event.preventDefault();"
      >
        <h2>Register</h2>
        <div className="flex flex-col pt-4 px-4">
          <label htmlFor="email" className="text-lg text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="ton@email.com"
            className="appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <div className="flex flex-col pt-4 px-4">
          <label htmlFor="password" className="text-lg text-gray-100">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className="appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <input
          type="submit"
          value="SE CONNECTER"
          className="mx-4  md:mx-56 bg-gray-900 text-gray-200 tracking-wider cursor-pointer text-lg hover:bg-green-500 p-2 mt-8 rounded-md"
        />
      </form>
      <div className="text-center pt-12 pb-12  text-gray-100">
        <p>
          Vous n'avez pas de compte ?{" "}
          <a
            href="register.html"
            className="underline font-semibold text-blue-400"
          >
            Enregistrez-vous ici.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
