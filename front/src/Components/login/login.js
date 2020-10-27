import React from "react";

const Login = () => {
  return (
    <div>
      <form
        className="flex flex-col pt-3 md:pt-8 w-full bg-green-800 mt-10"
        // onSubmit="event.preventDefault();"
      >
        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="password" className="text-lg text-gray-100">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="appearance-none w-full py-2 mt-1 leading-tight focus:shadow-outline text-gray-600 bg-gray-900 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className=" bg-orange-500 text-gray-100 font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      <div className="text-center pt-12 pb-12  text-gray-100">
        <p>
          Don't have an account?{" "}
          <a
            href="register.html"
            className="underline font-semibold text-blue-400"
          >
            Register here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
