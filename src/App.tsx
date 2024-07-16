import { SideNav } from "@/components/sidenav";
import { UserDashboard } from "@/features/users/user-dashboard";
import UserContextProvider from "@/context/user-context";
import SearchContextProvider from "@/context/search-context";

function App() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none border-b md:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow bg-gray-100 p-6 md:overflow-y-auto md:p-12">
        <UserContextProvider>
          <SearchContextProvider>
            <UserDashboard />
          </SearchContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
