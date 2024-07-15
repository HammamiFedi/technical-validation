import { Container } from "@/components/container";
import { SideNav } from "@/components/sidenav";

function App() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none border-b md:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow bg-gray-100 p-6 md:overflow-y-auto md:p-12">
        <Container title="Users" subtitle="Users Listing">
          USers LIst
        </Container>
      </div>
    </div>
  );
}

export default App;
