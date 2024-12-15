import NavigationMobile from "@/common/components/nav/NavigationMobile";
import SidebarDesktop from "@/common/components/nav/SidebarDesktop";

const Main = ({ children }: any) => {
  return (
    <div>
      <NavigationMobile />

      <SidebarDesktop />

      <main className="lg:pl-72 max-h-screen overflow-y-auto">
        <div className="py-10 lg:py-6">{children}</div>
      </main>
    </div>
  );
};

export default Main;
