import { Skeleton } from "@/components/ui/skeleton";

const UserFormSkeletonWrapper = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="space-y-3">
          <Skeleton className="h-2 w-16" />
          <Skeleton className="h-8" />
        </div>
      ))}
    </div>
  );
};

export default UserFormSkeletonWrapper;
