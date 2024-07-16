import { UserCardSkeleton } from "@/features/users/user-card-skeleton";

const UserCardsSkeletonWrapper = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <UserCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default UserCardsSkeletonWrapper;
