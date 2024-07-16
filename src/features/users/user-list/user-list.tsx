import { UserCard } from "@/features/users/user-card";
import { UserListPtops } from "@/features/users/user-list/user-list.type";

const UserList = ({ users }: UserListPtops) => {
  if (!users.length) {
    return <div className="text-center">No users found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {users.map((user) => (
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
