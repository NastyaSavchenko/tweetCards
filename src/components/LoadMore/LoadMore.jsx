import PropTypes from "prop-types";
import { useState } from "react";

import { getUsers } from "../../services/takeApi";
import { BtnStyles } from "./LoadMore.styled";

export const LoadMore = ({ usersData, setCurrentUsers }) => {
  const [currentPage, setCurrentPage] = useState(2);

  const onBtnClick = () => {
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
      alert("Oops) You viewed all available users");
    }
  };

  return (
    <BtnStyles type="button" onClick={onBtnClick}>
      load more
    </BtnStyles>
  );
};

LoadMore.propTypes = {
  usersData: PropTypes.array,
  setCurrentUsers: PropTypes.func,
};
