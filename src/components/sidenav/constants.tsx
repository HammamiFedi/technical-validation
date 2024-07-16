import { PersonIcon } from "@radix-ui/react-icons";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { FileTextIcon } from "@radix-ui/react-icons";

export const SIDEVAV_LINKS = [
  {
    id: 1,
    name: "Users",
    href: "/users",
    icon: PersonIcon,
    isActive: true,
  },
  {
    id: 2,
    name: "Todos",
    href: "/todos",
    icon: Pencil2Icon,
    isActive: false,
  },
  {
    id: 3,
    name: "Posts",
    href: "/posts",
    icon: FileTextIcon,
    isActive: false,
  },
];
