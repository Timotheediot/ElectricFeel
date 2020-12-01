import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  /////// PUT USER /////////
  const onSubmit = (data) => {
    fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(history.push("/login"));

    alert("Votre compte à bien été créé ");
  };

  return (
    <div className="flex justify-center mb-32">
      <form
        className="w-full flex flex-col md:pt-8 md:justify-center justify-center bg-gray-800 mt-32 pb-10  md:w-5/6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-gray-100 text-xl text-center w-full px-4 my-5 uppercase">
          Création du compte
        </h2>
        <div className="flex flex-col pt-4 px-4">
          <label htmlFor="email" className="text-lg text-gray-100">
            Email
          </label>
          <input
            type="email"
            aria-label="email"
            ref={register}
            name="email"
            placeholder="ton@email.com"
            className="appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          {errors.password && (
            <p className=" mt-2 text-sm text-red-600">Email invalide</p>
          )}
        </div>

        <div className="flex flex-col pt-4 px-4">
          <label htmlFor="password" className="text-lg text-gray-100">
            Mot de passe
          </label>
          <input
            type="password"
            aria-label="password"
            name="password"
            placeholder="Mot de passe"
            ref={register({ required: true, minLength: 8 })}
            className=" focus:outline-none appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm"
          />
          {errors.password && (
            <p className=" mt-2 text-sm text-red-600">Mot de passe invalide</p>
          )}
        </div>

        <input
          type="submit"
          value="S'INSCRIRE"
          className="mx-4 md:mx-56 bg-gray-900 text-gray-200 tracking-wider cursor-pointer text-lg hover:text-gray-900 hover:bg-green-500 p-2 mt-8 rounded-md "
        />

        <div className="text-center pt-12 pb-12  text-gray-100">
          <p>
            Vous avez pas un compte ?{" "}
            <Link to="/login">
              <p className="text-lg lg:p-4 py-3 px-0 block border-b-4 border-transparent hover:border-orange-600  hover:text-orange-600 transition duration-200 ease-in-out">
                Se connecter ici.
              </p>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
