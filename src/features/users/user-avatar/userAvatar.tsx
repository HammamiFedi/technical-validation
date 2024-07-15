import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarProps } from "@/features/users/user-avatar/user-avatar.type";
import { getInitials } from "@/lib/helpers";

const UserAvatar = ({ name, imageSrc }: UserAvatarProps) => {
  return (
    <Avatar className="size-16">
      <AvatarImage src={imageSrc} alt={name} />
      <AvatarFallback className="border border-violet-300 bg-violet-500 font-semibold text-white">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
