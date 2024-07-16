import useFetch from "@/hooks/useFetch";
import { Container } from "@/components/container";
import { ENDPOINTS } from "@/config/constants/endpoints";
import { UserList } from "@/features/users/user-list";
import { UserCardsSkeletonWrapper } from "@/features/users/user-cards-skeleton-wrapper";
import { User } from "@/types/User";
import useSearchContext from "@/hooks/useSearchContext";

const UserDashboard = () => {
  const { data, isFetching } = useFetch<User>(ENDPOINTS.USERS);

  const { searchText } = useSearchContext();

  const filteredData = data.filter((user) => {
    const query = searchText.toLowerCase();
    const name = user.name.toLowerCase().includes(query);
    const username = user.username.toLowerCase().includes(query);
    return name || username;
  });

  return (
    <Container title="Users" subtitle="List, Search and Show users details">
      {searchText && (
        <h1 className="my-4 ml-2 text-2xl">Search results for: {searchText}</h1>
      )}
      {isFetching ? (
        <UserCardsSkeletonWrapper />
      ) : (
        <UserList users={filteredData} />
      )}
    </Container>
  );
};

export default UserDashboard;
