import { TrashIcon } from "@radix-ui/react-icons";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { UserCardProps } from "@/features/users/user-card/user-card.type";
import { UserAvatar } from "@/features/users/user-avatar";
import { Button } from "@/components/ui/button";

const UserCard = ({ name, username }: UserCardProps) => {
  return (
    <Card className="group relative bg-gray-100 hover:bg-sky-100">
      <CardHeader className="flex flex-row gap-x-2">
        <UserAvatar name={name} />
        <div>
          <h1 className="font-bold">{username}</h1>
          <span className="text-gray-400">{name}</span>
        </div>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>

      <TrashIcon className="invisible absolute right-2 top-2 h-5 w-5 text-gray-500 hover:cursor-pointer hover:text-red-500 group-hover:visible" />
    </Card>
  );
};

export default UserCard;
