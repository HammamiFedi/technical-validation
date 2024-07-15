import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const GoBackButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="transition-width group duration-300 ease-in-out hover:w-20 hover:bg-sky-100 hover:text-sky-600"
    >
      <ArrowLeftIcon className="" />
      <span className="ml-3 hidden transition duration-700 ease-in-out group-hover:block">
        Back
      </span>
    </Button>
  );
};

export default GoBackButton;
