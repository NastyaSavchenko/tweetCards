import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getAllUsers } from "../../services/takeApi";

const options = ["Show all", "Follow", "Followings"];

export const Search = ({
  setVisibleUsers,
  setCurrentUsers,
  currentUsers,
  subscriptions,
  setVisibleLoadMore,
}) => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setAllUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleOptionChange = (event, value) => {
    setVisibleLoadMore(false);

    switch (value) {
      case "Show all":
        const updatedUsersShowAll = allUsers.map((user) => {
          const foundSubscription = subscriptions.find(
            (sub) => sub.id === user.id
          );
          if (foundSubscription) {
            return { ...user, isFollowing: true };
          }
          return { ...user, isFollowing: false };
        });
        setVisibleUsers(updatedUsersShowAll);
        setCurrentUsers(updatedUsersShowAll);
        break;

      case "Follow":
        const filteredFollowUsers = currentUsers.filter(
          (user) => user.isFollowing === false || user.isFollowing === undefined
        );

        setVisibleUsers(filteredFollowUsers);

        filteredFollowUsers.length === 0 &&
          toast.error(`It seems you are following all available users!`);

        break;

      case "Followings":
        const filteredFollowingUsers = currentUsers.filter(
          (user) => user.isFollowing === true
        );
        setVisibleUsers(filteredFollowingUsers);

        filteredFollowingUsers.length === 0 &&
          toast.error(`You don't have any subscriptions yet!`);

        break;

      default:
        break;
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 200 }}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField
          color="secondary"
          placeholder="Search..."
          {...params}
          sx={{
            ".MuiOutlinedInput-root .MuiAutocomplete-input": {
              padding: "0",
              outline: "none",
            },
            "& .MuiAutocomplete-root.Mui-expanded.Mui-focused": {
              border: "solid 1px #5736a3",
              borderColor: " #5736a3",
              outline: "none",
            },
            "& .MuiOutlinedInput-root": {
              border: "solid 1px #5736a3",

              "&:hover, &.Mui-focused": {
                boxShadow: "0 0 3px 1px #5736a3",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "0",
              color: "#a487d4",

              background: "none",
            },
          }}
        />
      )}
    />
  );
};

Search.propTypes = {
  setVisibleUsers: PropTypes.func,
  setCurrentUsers: PropTypes.func,
  currentUsers: PropTypes.array,
  subscriptions: PropTypes.array,
  setVisibleLoadMore: PropTypes.func,
};
