import React, { Component } from "react";
import { getUsers } from "../api/user";
import { formatUserData } from "../utils/helpers";

class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersData: [],
      currentPage: 1,
      totalPages: 0,
      usersPerPage: 5,
    };
  }

  fetchUsers = async () => {
    const { data, page, per_page, total, total_pages } = await getUsers(
      this.state.currentPage,
      this.state.usersPerPage
    );
    if (!data) {
      return;
    }
    const finalData = data.map((user) => formatUserData(user));
    this.setState({ usersData: finalData, totalPages: total_pages });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.currentPage !== this.state.currentPage) {
      console.log(
        `This is mounted or state updated => ${this.state.currentPage} .`
      );
      this.fetchUsers();
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount => Before the componet lifecycle ends.");
  }

  handleOnPageChange = ({ target }) => {
    console.log(parseInt(target?.outerText));
    this.setState({ currentPage: parseInt(target?.outerText) });
  };

  getExposedData = () => {
    const { usersData, totalPages } = this.state;
    return {
      usersData,
      totalPages,
      handleOnPageChange: this.handleOnPageChange,
    };
  };

  render() {
    return this.props.children(this.getExposedData());
  }
}

export default UserContainer;
