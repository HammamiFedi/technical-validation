import { GoBackButton } from "@/components/go-back-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ContainerProps } from "@/components/container/container.type";
import useSearchContext from "@/hooks/useSearchContext";

const Container = ({ title, subtitle, children }: ContainerProps) => {
  const { searchText, handleSearchChange } = useSearchContext();
  return (
    <div className="space-y-3">
      <GoBackButton />
      <Card className="rounded-md shadow-md">
        <CardHeader className="flex flex-col justify-start border-b border-gray-300 py-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-wide text-indigo-600">
              {title}
            </h1>
            <p className="font-mono font-semibold text-gray-400">{subtitle}</p>
          </div>
          <div>
            <Input
              placeholder="Search..."
              type="text"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </CardHeader>
        <CardContent className="mt-5">{children}</CardContent>
      </Card>
    </div>
  );
};

export default Container;
