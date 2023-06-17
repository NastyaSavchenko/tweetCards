import PropTypes from "prop-types";
import { useState } from "react";

import { getUsers } from "../../services/takeApi";
import { BtnStyles } from "./MainBtn.styled";

export const MainBtn = ({ title, usersData, setCurrentUsers }) => {
  const [currentPage, setCurrentPage] = useState(2);

  const onBtnClick = () => {
    if (title === "go back") {
      return (window.location.href = "/");
    } else if (title === "load more") {
      if (usersData.length < 12) {
        setCurrentPage((prevData) => prevData + 1);
        async function fetchData() {
          try {
            const response = await getUsers(currentPage);
            setCurrentUsers([...usersData, ...response.data]);
          } catch (error) {
            console.log(error);
          }
        }

        fetchData();
      } else {
        return alert("Oops) You viewed all available users");
      }
    }
  };

  return (
    <BtnStyles type="button" onClick={onBtnClick}>
      {title}
    </BtnStyles>
  );
};

MainBtn.propTypes = {
  title: PropTypes.string,
  usersData: PropTypes.array,
  setCurrentUsers: PropTypes.func,
};
