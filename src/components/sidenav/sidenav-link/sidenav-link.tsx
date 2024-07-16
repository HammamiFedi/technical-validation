import { SideNavLinkProps } from "@/components/sidenav/sidenav-link/sidenav-link.type";
import { cn } from "@/lib/utils";

const SideNavLink = ({ name, children, isActive }: SideNavLinkProps) => {
  return (
    <div
      className={cn(
        "group flex h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:px-3",
        {
          "bg-sky-100 text-blue-600": isActive,
        },
      )}
    >
      {children}
      <p className="hidden transition-transform duration-300 ease-in-out group-hover:translate-x-2 md:block">
        {name}
      </p>
    </div>
  );
};

export default SideNavLink;
