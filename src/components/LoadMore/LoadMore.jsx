import PropTypes from "prop-types";

import { getUsers } from "../../services/takeApi";
import { BtnStyles } from "./LoadMore.styled";

export const LoadMore = ({
  usersData,
  setCurrentUsers,
  setVisibleUsers,
  currentPage,
  setCurrentPage,
  visibleLoadMore,
}) => {
  const onBtnClick = async () => {
    if (usersData.length < 12) {
      setCurrentPage((prevPage) => prevPage + 1);
      try {
        const response = await getUsers(currentPage);
        const newData = [...usersData, ...response.data];
        setCurrentUsers(newData);
        setVisibleUsers(newData);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Oops) You viewed all available users");
    }
  };

  return (
    visibleLoadMore && (
      <BtnStyles type="button" onClick={onBtnClick}>
        load more
      </BtnStyles>
    )
  );
};

LoadMore.propTypes = {
  usersData: PropTypes.array,
  setCurrentUsers: PropTypes.func,
  setVisibleUsers: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  visibleLoadMore: PropTypes.bool,
};
