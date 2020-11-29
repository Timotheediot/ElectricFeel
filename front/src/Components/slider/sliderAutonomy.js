import React, { useState, useContext } from "react";
import { AutosContext } from "../form/form";
import { Range, getTrackBackground } from "react-range";

const SliderAutonomy = () => {
  const [state, setState] = useState({ values: [0, 1000] });

  const STEP = 50;
  const MIN = 0;
  const MAX = 1000;
  return (
    <>
      <h2 className="text-gray-300 text-lg mb-2">Automie en kilomètres</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setState({ values });
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
                    values: state.values,
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
        <output className="text-md text-white mt-2 mb-8 ">
          {state.values[0]}
          {"km"} - {state.values[1]}
          {"km"}
        </output>
      </div>
    </>
  );
};

export default SliderAutonomy;
