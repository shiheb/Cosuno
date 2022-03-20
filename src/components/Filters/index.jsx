import union from "lodash/union";
import without from "lodash/without";
import React from "react";
import Switch from "../Switch";
import useMediaQuery from "./../../pages/useMediaQuery";
import { CardFilter, FilterTitle, Root, Specialties } from "./styles";
const Filters = ({ filters, setFilters, specialties }) => {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <Root>
      <CardFilter>
        <FilterTitle>Filters</FilterTitle>
        <Specialties matches={matches}>
          {specialties?.map((item) => (
            <Switch
              key={item.id}
              isOn={filters.includes(item.name)}
              onColor="rgb(36, 81, 178)"
              handleToggle={(value) => {
                value.target.checked
                  ? setFilters(union(filters, [item.name]))
                  : setFilters(without(filters, item.name));
              }}
              id={item.id}
              name={item.name}
            />
          ))}
        </Specialties>
      </CardFilter>
    </Root>
  );
};

export default Filters;
