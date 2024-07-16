import { toast } from "sonner";
import useFetch from "@/hooks/useFetch";
import { Container } from "@/components/container";
import { ENDPOINTS } from "@/config/constants/endpoints";
import { UserList } from "@/features/users/user-list";
import { UserCardsSkeletonWrapper } from "@/features/users/user-cards-skeleton-wrapper";
import { User } from "@/types/User";
import { UserDialog } from "./user-dialog";
import { useSearchStore } from "@/store/searchStore";

const UserDashboard = () => {
  const { data, isFetching, error } = useFetch<User>(ENDPOINTS.USERS);

  const { searchText } = useSearchStore();

  const filteredData = data.filter((user) => {
    const query = searchText.toLowerCase();
    const name = user.name.toLowerCase().includes(query);
    const username = user.username.toLowerCase().includes(query);
    return name || username;
  });

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <Container title="Users" subtitle="List, Search and Show users details">
        {searchText && (
          <h1 className="my-4 ml-2 text-2xl">
            Search results for: {searchText}
          </h1>
        )}
        {isFetching ? (
          <UserCardsSkeletonWrapper />
        ) : (
          <UserList users={filteredData} />
        )}
      </Container>
      <UserDialog />
    </>
  );
};

export default UserDashboard;
