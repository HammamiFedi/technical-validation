import { Container } from "@/components/container";
import { UserList } from "@/features/users/user-list";

const UserDashboard = () => {
  return (
    <Container title="Users" subtitle="List, Search and Show users details">
      <UserList />
    </Container>
  );
};

export default UserDashboard;
