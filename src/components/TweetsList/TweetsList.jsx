import PropTypes from "prop-types";

import { TweetCard } from "../TweetCard/TweetCard";
import { TweetsListStyles } from "./TweetsList.styled";

export const TweetsList = ({
  currentUsers,
  setCurrentUsers,
  visibleUsers,
  setSubscriptions,
  subscriptions,
}) => {
  return (
    <TweetsListStyles>
      {visibleUsers &&
        visibleUsers.map((user) => {
          return (
            <li key={user.id}>
              <TweetCard
                userData={user}
                currentUsers={currentUsers}
                setCurrentUsers={setCurrentUsers}
                setSubscriptions={setSubscriptions}
              />
            </li>
          );
        })}
    </TweetsListStyles>
  );
};

TweetsList.propTypes = {
  currentUsers: PropTypes.array,
  setCurrentUsers: PropTypes.func,
  visibleUsers: PropTypes.array,
  setSubscriptions: PropTypes.func,
  subscriptions: PropTypes.array,
};
