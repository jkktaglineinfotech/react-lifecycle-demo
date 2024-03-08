import React from "react";
import { mainTableContainer } from "../../container/mainTable.container";
import CommonDataTable from "../../shared/CommonDataTable";
import CommonDataFilter from "../../shared/CommonDataFilter";
import CommonSearchBox from "../../shared/CommonSearchBox";

const MainTable = () => {
  const { mainUsersData, handleOnChange, handleOnSearch, handleOnClear } =
    mainTableContainer();
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        {mainUsersData.length > 1 && (
          <>
            <CommonDataFilter data={mainUsersData} onChange={handleOnChange} />
            <CommonSearchBox
              onSearch={handleOnSearch}
              onClear={handleOnClear}
            />
          </>
        )}
      </div>
      {mainUsersData.length > 1 && <CommonDataTable data={mainUsersData} />}
    </div>
  );
};

export default MainTable;
