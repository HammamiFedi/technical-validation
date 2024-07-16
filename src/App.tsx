import { SideNav } from "@/components/sidenav";
import { Toaster } from "@/components/ui/sonner";
import { UserDashboard } from "@/features/users/user-dashboard";

function App() {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow bg-stone-100 p-6 md:overflow-y-auto md:p-12">
          <UserDashboard />
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
