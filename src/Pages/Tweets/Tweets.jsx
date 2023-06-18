import { useEffect } from "react";

import { LoadMore } from "../../components/LoadMore/LoadMore";
import { Search } from "../../components/Search/Search";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getUsers } from "../../services/takeApi";
import { LinkStyels, MainSlyels, NavSection } from "./Tweets.styled";

const Tweets = () => {
  const [currentUsers, setCurrentUsers] = useLocalStorage("users", []);

  useEffect(() => {
    async function fetchData() {
      if (currentUsers.length < 1) {
        try {
          const response = await getUsers(1);
          setCurrentUsers(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, [currentUsers, setCurrentUsers]);

  return (
    <MainSlyels>
      <h2>list of user cards</h2>
      <NavSection>
        <LinkStyels to="/">go back</LinkStyels>
        <Search />
        <LoadMore usersData={currentUsers} setCurrentUsers={setCurrentUsers} />
      </NavSection>
      <section>
        <TweetsList
          currentUsers={currentUsers}
          setCurrentUsers={setCurrentUsers}
        />
      </section>
    </MainSlyels>
  );
};

export default Tweets;
