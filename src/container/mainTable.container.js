import { useEffect, useState } from "react";
import { mainUsersData } from "../description/mainTable.description";
import { values } from "lodash";

export const mainTableContainer = () => {
  const [filterValues, setFilterValues] = useState([]);
  const handleOnChange = (filterTitle, filterValue, checkedStatus) => {
    console.log("in handleOnChange checkedStatus", checkedStatus);
    console.log("in handleOnChange filterValue", filterValue);
    console.log("in handleOnChange filterTitle", filterTitle);

    if (checkedStatus) {
      setFilterValues([
        ...filterValues,
        { searchTitle: filterTitle, searchValue: filterValue },
      ]);
    } else {
      setFilterValues(
        filterValues.filter(
          (item) =>
            item.searchValue !== filterValue && item.searchTitle !== filterTitle
        )
      );
    }
  };
  // const handleOnChange = (filterValues) => {
  //   console.log("handleOnChange", filterValues);
  // };

  useEffect(() => {
    console.log("mainTableContainer", filterValues);
    finalValues(filterValues);
  }, [filterValues]);

  const [filterAttributes, setFilterAttributes] = useState([]);

  const finalValues = (values) => {
    mainUsersData.map((itemArr) => {
      console.log("itemArr", itemArr);
      values.map((value) => {
        if (Object.keys(itemArr).includes(value.searchTitle)) {
          console.log("result array", itemArr[value.searchTitle]);
          setFilterAttributes([
            ...filterAttributes,
            { [value.searchTitle]: itemArr[value.searchTitle] },
          ]);
        }
      });
    });
  };

  useEffect(() => {
    console.log("Filtered Data", filterAttributes);
  }, [filterAttributes]);

  const handleOnSearch = (searchValue) => {
    console.log("handleOnSearch", searchValue);
  };

  const handleOnClear = () => {
    console.log("handleOnClear");
  };

  return {
    mainUsersData,
    handleOnSearch,
    handleOnChange,
    handleOnClear,
  };
};
