import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";
import { Range, getTrackBackground } from "react-range";

const SliderPrice = () => {
  const autoList = useContext(AutosContext);
  const [price, setPrice] = useState({ values: [0, 110000] });

  const STEP = 100;
  const MIN = 0;
  const MAX = 110000;

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <h2 className="text-gray-300 text-lg mb-2">Prix</h2>
      <div className="flex justify-center flex-wrap focus:outline-none">
        <Range
          onChange={(e) => handleChange(e)}
          values={price.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setPrice({ values });
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="flex w-full h-10"
            >
              <div
                className="w-full h-2 rounded-md"
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values: price.values,
                    colors: ["#1a202c", "#dd6b20", "#1a202c"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className="flex justify-center items-center w-8 h-8 rounded-lg bg-gray-900 focus:outline-none"
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#dd6b20" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output className="text-md text-white mt-2 mb-5 ">
          {price.values[0]}
          {"€"} - {price.values[1]}
          {"€"}
        </output>
      </div>
    </>
  );
};

export default SliderPrice;
