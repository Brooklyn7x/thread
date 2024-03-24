import { LoaderCircle } from "lucide-react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full animate-spin ">
      <LoaderCircle className="h-7 w-7" />
    </div>
  );
};

export default Loading;
