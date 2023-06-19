import numeral from "numeral";
import PropTypes from "prop-types";
import { useState } from "react";

import logo from "../../Img/logo.png";
import plugAvatar from "../../Img/plug_avatar.png";
import { changeFollowers } from "../../services/takeApi";
import {
  Card,
  CardBg,
  FollowChangeBtn,
  UserAvatar,
  UserBox,
  UserInfo,
} from "./TweetCard.styled";

export const TweetCard = ({
  userData,
  currentUsers,
  setCurrentUsers,
  setSubscriptions,
}) => {
  const { avatar, tweets, id, user } = userData;

  const currentUser = currentUsers.find((data) => data.id === id);

  const [currentFollowers, setCurrentFollowers] = useState(
    currentUser.followers
  );

  const [isFollowing, setIsFollowing] = useState(currentUser.isFollowing);

  const onFollowChange = async () => {
    setCurrentFollowers((prevFollowers) =>
      isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);

    const updateUser = {
      user: currentUser.user,
      tweets: currentUser.tweets,
      id: currentUser.id,
      avatar: currentUser.avatar,
      followers: isFollowing ? currentFollowers - 1 : currentFollowers + 1,
    };

    const updatedUserSubscription = currentUsers.map((user) => {
      if (user.id === id) {
        return { ...updateUser, isFollowing: !isFollowing };
      }
      return user;
    });

    setCurrentUsers(updatedUserSubscription);

    if (isFollowing) {
      setSubscriptions((prevSubscriptions) =>
        prevSubscriptions.filter((subscription) => subscription.id !== id)
      );
    } else {
      setSubscriptions((prevSubscriptions) => [
        ...prevSubscriptions,
        currentUser,
      ]);
    }

    try {
      await changeFollowers(currentUser.id, updateUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card>
      <CardBg>
        <img src={logo} alt="logo" />
      </CardBg>
      <UserAvatar>
        <div>
          <img src={avatar ? avatar : plugAvatar} alt="user avatar" />
        </div>
      </UserAvatar>
      <UserBox>
        <UserInfo>
          <li>{user}</li>
          <li>{tweets} tweets</li>
          <li> {numeral(currentFollowers).format("0,0")} Followers</li>
        </UserInfo>
        <FollowChangeBtn
          type="button"
          onClick={onFollowChange}
          isFollowing={isFollowing}
        >
          {isFollowing ? "Following" : "Follow"}
        </FollowChangeBtn>
      </UserBox>
    </Card>
  );
};

TweetCard.propTypes = {
  userData: PropTypes.object,
  currentUsers: PropTypes.array,
  setCurrentUsers: PropTypes.func,
  setSubscriptions: PropTypes.func,
};
