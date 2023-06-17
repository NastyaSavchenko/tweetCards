import PropTypes from "prop-types";

import { TweetCard } from "../TweetCard/TweetCard";
import { TweetsListStyles } from "./TweetsList.styled";

export const TweetsList = ({ currentUsers, setCurrentUsers }) => {
  return (
    <TweetsListStyles>
      {currentUsers &&
        currentUsers.map((user) => {
          return (
            <li key={user.id}>
              <TweetCard
                userData={user}
                currentUsers={currentUsers}
                setCurrentUsers={setCurrentUsers}
              />
            </li>
          );
        })}
    </TweetsListStyles>
  );
};

TweetsList.propTypes = {
  currentUsers: PropTypes.array.isRequired,
  setCurrentUsers: PropTypes.func.isRequired,
};
