import { useEffect, useState } from "react";

import { LoadMore } from "../../components/LoadMore/LoadMore";
import { Search } from "../../components/Search/Search";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getUsers } from "../../services/takeApi";
import { LinkStyels, MainSlyels, NavSection } from "./Tweets.styled";

const Tweets = () => {
  const [currentUsers, setCurrentUsers] = useLocalStorage("users", []);
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 0);
  const [subscriptions, setSubscriptions] = useLocalStorage(
    "subscriptions",
    []
  );
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [visibleLoadMore, setVisibleLoadMore] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (currentUsers.length < 1) {
        try {
          const response = await getUsers(1);
          setCurrentUsers(response.data);
          setVisibleUsers(response.data);
          setVisibleLoadMore(true);
        } catch (error) {
          console.log(error);
        }
      }
    }

    if (currentUsers.length > 0) {
      setVisibleUsers(currentUsers);
    } else {
      fetchData();
      setCurrentPage(2);
    }
  }, [currentUsers, setCurrentUsers]);

  return (
    <MainSlyels>
      <h2>list of user cards</h2>
      <NavSection>
        <LinkStyels to="/">go back</LinkStyels>
        <Search
          setCurrentUsers={setCurrentUsers}
          currentUsers={currentUsers}
          setVisibleUsers={setVisibleUsers}
          subscriptions={subscriptions}
          setVisibleLoadMore={setVisibleLoadMore}
        />
        <LoadMore
          usersData={currentUsers}
          setCurrentUsers={setCurrentUsers}
          setVisibleUsers={setVisibleUsers}
          visibleUsers={visibleUsers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          visibleLoadMore={visibleLoadMore}
        />
      </NavSection>
      <section>
        <TweetsList
          currentUsers={currentUsers}
          setCurrentUsers={setCurrentUsers}
          visibleUsers={visibleUsers}
          setSubscriptions={setSubscriptions}
          subscriptions={subscriptions}
        />
      </section>
    </MainSlyels>
  );
};

export default Tweets;
