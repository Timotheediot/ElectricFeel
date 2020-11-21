import React, { useEffect } from "react";
import lottie from "lottie-web";
import animation from "../../animations/cube-loading.json";

const Contact = () => {
  let animationContainer = React.createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
  }, []);

  return (
    <div className="h-50 h-screen flex justify-center items-center">
      <h2 className="text-gray-200 text-xl">En cours de construction…</h2>
      <div className=" h-1/3 w-1/3" ref={animationContainer} />
    </div>
  );
};

export default Contact;
