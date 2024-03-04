import { useEffect, useState } from "react";
import { getUsers } from "../api/user";
import { formatUserData } from "../utils/helpers";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoadingError,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";

export const userContainer = () => {
  const [counter, setCounter] = useState(0);

  const [usersData, setUsersData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const dispatch = useDispatch();
  useEffect(() => {
    // Merge of componentDidMount and componentDidUpdate
    console.log("It will run whenever component mounts or updates");
  });

  const fetchUsers = async () => {
    dispatch(startLoading());
    const { data, page, per_page, total, total_pages } = await getUsers(
      currentPage,
      usersPerPage
    );
    if (!data) {
      dispatch(stopLoadingError());
      return;
    }
    const finalData = data.map((user) => formatUserData(user));
    setUsersData(finalData);
    setTotalPages(total_pages);
    dispatch(stopLoadingSuccess());
  };

  useEffect(() => {
    // Equivalent of componentDidMount
    console.log("This message is only showed once in whole lifecycle");
    // fetchUsers();
  }, []);

  // Merge of componentDidMount and componentDidUpdate but only for given dependency
  useEffect(() => {
    console.log(`This is mounted or count state updated => ${currentPage} .`);
    fetchUsers();
  }, [currentPage]);

  // Equivalent of componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("This is unmounted.");
    };
  }, []);

  const handleOnPageChange = ({ target }) => {
    console.log(parseInt(target?.outerText));
    setCurrentPage(parseInt(target?.outerText));
  };

  return {
    usersData,
    totalPages,
    handleOnPageChange,
  };
};
