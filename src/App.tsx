import SideNav from "@/components/sidenav/sidenav";

function App() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none border-b md:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">Children</div>
    </div>
  );
}

export default App;
