import SideNavHero from "@/components/sidenav/sidenav-hero/sidenav-hero";
import SideNavLink from "@/components/sidenav/sidenav-link/sidenav-link";

import { SIDEVAV_LINKS } from "@/components/sidenav/constants";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Taho AI Hero Bloc */}
      <SideNavHero />
      {/* SideNav Links */}
      <div className="flex grow flex-row justify-center space-x-2 md:flex-col md:justify-start md:space-x-0 md:space-y-2">
        {SIDEVAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <SideNavLink
              key={link.id}
              name={link.name}
              href={link.href}
              isActive={link.isActive}
            >
              <Icon className="w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </SideNavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
