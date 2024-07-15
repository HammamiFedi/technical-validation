import useFetch from "@/hooks/useFetch";
import { User } from "@/types/User";
import { ENDPOINTS } from "@/config/constants/endpoints";
import { UserCard } from "@/features/users/user-card";

const UserList = () => {
  const { data, isFetching, error } = useFetch<User>(ENDPOINTS.USERS);

  if (error) {
    return <p>{error}</p>;
  }

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default UserList;
