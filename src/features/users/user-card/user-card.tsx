import { TrashIcon } from "@radix-ui/react-icons";
import { EyeOpenIcon } from "@radix-ui/react-icons";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { UserCardProps } from "@/features/users/user-card/user-card.type";
import { UserAvatar } from "@/features/users/user-avatar";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";

const UserCard = ({ name, username, id }: UserCardProps) => {
  const setUserId = useUserStore((state) => state.setUserId);
  return (
    <Card className="group relative border-transparent shadow-none hover:border hover:border-stone-200 hover:shadow-md">
      <CardHeader className="text-bg-linear flex flex-row gap-x-2">
        <UserAvatar name={name} />
        <div>
          <h1 className="font-bold">{username}</h1>
          <span className="font-mono text-cyan-500">{name}</span>
        </div>
      </CardHeader>
      <CardFooter>
        <Button className="w-full gap-2" onClick={() => setUserId(id)}>
          <EyeOpenIcon className="w-6" /> View Details
        </Button>
      </CardFooter>

      <TrashIcon className="invisible absolute right-2 top-2 size-6 text-gray-500 hover:cursor-pointer hover:text-red-500 group-hover:visible" />
    </Card>
  );
};

export default UserCard;
