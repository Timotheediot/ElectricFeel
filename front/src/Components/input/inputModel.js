import React from "react";

const InputModel = ({ optionListByBrand }) => {
  function sortByModel(a, b) {
    if (a && b) {
      if (a.model_auto < b.model_auto) return -1;
      if (a.model_auto > b.model_auto) return 1;
    }
    return 0;
  }

  // useEffect(() => {
  //   fetchInputValue();
  // }, []);

  return (
    <>
      <select className="w-full bg-gray-900 text-gray-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-10">
        {optionListByBrand &&
          optionListByBrand.sort(sortByModel).map((value, index) => {
            return (
              <option value={value.model_auto} key={index}>
                {value.model_auto}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default InputModel;
