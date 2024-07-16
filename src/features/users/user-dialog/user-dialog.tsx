import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFetchById from "@/hooks/useFetchById";
import { useUserStore } from "@/store/userStore";
import { User } from "@/types/User";
import { UserDetailsForm } from "@/features/users/user-form";
import { UserFormSkeletonWrapper } from "@/features/users/user-form-skeleton-wrapper";

const UserDialog = () => {
  const { userId, openUserDialog, onOpenChange } = useUserStore(
    (state) => state,
  );

  const { data, isFetching, error } = useFetchById<User>(userId);

  if (error) {
    toast.error(error);
  }

  return (
    <Dialog open={openUserDialog} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        {isFetching ? (
          <UserFormSkeletonWrapper />
        ) : (
          <UserDetailsForm user={data} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
