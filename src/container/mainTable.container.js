import { useEffect, useState } from "react";
import { mainUsersData } from "../description/mainTable.description";

export const mainTableContainer = () => {
  const [filterValues, setFilterValues] = useState([]);
  const handleOnChange = (filterTitle, filterValue, checkedStatus) => {
    console.log("in handleOnChange", checkedStatus);
    if (checkedStatus) {
      setFilterValues([
        ...filterValues,
        { searchTitle: filterTitle, searchValue: filterValue },
      ]);
    } else {
      setFilterValues(
        filterValues.filter(
          (item) =>
            item.searchValue !== searchValue && item.searchTitle !== searchTitle
        )
      );
    }
  };

  useEffect(() => {
    console.log("mainTableContainer", filterValues);
  }, [filterValues]);

  return {
    mainUsersData,
    handleOnChange,
  };
};
