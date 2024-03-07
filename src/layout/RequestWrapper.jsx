import React from "react";
import Tabs from "../presentation/Tabs";
import { useSearchParams } from "react-router-dom";

const RequestWrapper = () => {
  const [searchParams] = useSearchParams();

  const tabParams = searchParams.get("tab");
  return (
    <>
      <Tabs tabParams={tabParams} />
    </>
  );
};

export default RequestWrapper;
