import { GoBackButton } from "@/components/go-back-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ContainerProps } from "@/components/container/container.type";
import { useSearchStore } from "@/store/searchStore";

const Container = ({ title, subtitle, children }: ContainerProps) => {
  const { searchText, handleSearchTextChange } = useSearchStore();
  return (
    <div className="space-y-3">
      <GoBackButton />
      <Card className="rounded-lg border-none">
        <CardHeader className="flex flex-col justify-start gap-y-3 border-b border-gray-300 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-bg-linear text-3xl font-bold tracking-wide text-transparent">
              {title}
            </h1>
            <p className="font-mono font-semibold text-cyan-500">{subtitle}</p>
          </div>
          <div>
            <Input
              placeholder="Search..."
              type="text"
              value={searchText}
              onChange={(e) => handleSearchTextChange(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="mt-5">{children}</CardContent>
      </Card>
    </div>
  );
};

export default Container;
