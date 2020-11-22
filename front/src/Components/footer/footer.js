import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer lg:px-16 px-6 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-gray-800 font-bold mb-2">
                © 2020 by Timothée DIOT
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
