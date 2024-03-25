import { useDispatch } from "react-redux";
import { setFilterTerm } from "../../redux/cars/carsSlice";
import { StyledFilter } from "./Filter.styled";
import { FilterMake } from "./FilterMake/FilterMake";
import { FilterPrice } from "./FilterPrice/FilterPrice";

export const Filter = ({ handleSearchCar }) => {
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    const eventName = e.name;
    switch (eventName) {
      case "make":
        dispatch(setFilterTerm({ make: e.value }));
        break;
      case "rentPrice":
        dispatch(setFilterTerm({ rentPrice: e.value }));
        break;
      default:
        break;
    }
  };

  return (
    <StyledFilter onSubmit={handleSearchCar}>
      <FilterMake handleSelect={handleSelect} />
      <FilterPrice handleSelect={handleSelect} />
      <button className="searchBtn" type="submit">
        Search
      </button>
    </StyledFilter>
  );
};
