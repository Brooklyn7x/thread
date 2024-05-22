import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

import { memo } from "react";

const SearchPop = ({ searchData }: any) => {
  console.log("renderPOp");
  if (!searchData) return null;
  return (
    <div className="w-full relative">
      {searchData.length > 0 && (
        <div className="absolute bg-background z-10 h-auto w-full mt-2 rounded-b-2xl rounded-t-2xl shadow-sm border cursor-pointer">
          {searchData.map((data: any) => (
            <>
              <div key={data} className="flex items-center justify-between p-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src={"/t1.jpeg"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Link
                    href={`/profile/${data.userId}`}
                    className="flex items-center"
                  >
                    <div>
                      <h1 className="text-md">{data.name}</h1>
                    </div>
                  </Link>
                </div>
                <div> </div>
              </div>
              <Separator />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(SearchPop);
