import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { StyledFilterPrice } from "./FilterPrice.styled";

export const FilterPrice = ({ handleSelect }) => {
  const [searchParams] = useSearchParams();
  const queryPrice = searchParams.get("rentPrice");
  const price = [];
  for (let i = 10; i <= 200; i += 10) {
    price.push(i);
  }
  const priceObject = price.map((cost) => {
    return {
      value: cost,
      label: cost,
      name: "rentPrice",
    };
  });
  const currentPrice = price.findIndex((cost) => cost === Number(queryPrice));
  return (
    <label>
      <span>Price/ 1 hour</span>
      <Select
        options={priceObject}
        name="rentPrice"
        onChange={handleSelect}
        styles={StyledFilterPrice}
        defaultValue={queryPrice ? priceObject[currentPrice] : priceObject[0]}
      />
    </label>
  );
};
