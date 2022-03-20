import intersection from "lodash/intersection";
import React, { useEffect, useMemo, useState } from "react";
import CompanyCard from "../../components/CompanyCard";
import Filters from "./../../components/Filters";
import SearchBox from "./../../components/SearchBox";
import useMediaQuery from "./../useMediaQuery";
import {
  BodyLayout,
  CardContainer,
  CompaniesLength,
  Header,
  NoData,
  Root,
} from "./styles";
const Companies = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [items, setItems] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filters, setFilters] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("/companies");
    const items = await data.json();
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
    fetchSpecialties();
  }, []);

  const fetchSpecialties = async () => {
    const data = await fetch("/specialties");
    const items = await data.json();
    setSpecialties(items);
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const searchedData = items?.filter(
    (element) =>
      element.name?.toLowerCase().includes(searchField.toLowerCase()) ||
      element.city?.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredData = useMemo(() => {
    if (filters?.length === 0) return searchedData;
    else
      return searchedData?.filter(
        (e) => intersection(e.specialties, filters)?.length > 0
      );
  }, [filters, searchedData]);

  return (
    <Root>
      <Header>
        <SearchBox
          handleChange={handleChange}
          placeholder={"Search company"}
          searchField={Boolean(searchField?.length)}
        />
        <CompaniesLength>{filteredData?.length} Companies</CompaniesLength>
      </Header>
      <BodyLayout matches={matches}>
        <div>
          {filteredData?.length ? (
            <CardContainer>
              {filteredData?.map((item) => (
                <CompanyCard key={item.id} item={item} />
              ))}
            </CardContainer>
          ) : (
            <NoData>0 matches for your search</NoData>
          )}
        </div>
        <Filters
          filters={filters}
          setFilters={setFilters}
          specialties={specialties}
        />
      </BodyLayout>
    </Root>
  );
};

export default Companies;
