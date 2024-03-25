import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import makes from "../../../makes.json";
import { StyledFilterMake } from "./FilterMake.styled";
makes.unshift("Enter to text");

export const FilterMake = ({ handleSelect }) => {
  const [searchParams] = useSearchParams();
  const queryMake = searchParams.get("make");
  const carObjects = makes.map((car) => {
    return {
      value: car,
      label: car,
      name: "make",
    };
  });
  const currentMake = carObjects.findIndex((make) => make.value === queryMake);
  return (
    <label>
      <span>Car brand</span>
      <Select
        options={carObjects}
        onChange={handleSelect}
        name="make"
        styles={StyledFilterMake}
        defaultValue={queryMake ? carObjects[currentMake] : carObjects[0]}
      />
    </label>
  );
};
