import { formatTime } from "@/lib/utils";

const ThreadTime = ({ createdAt }: any) => {
  const createdAtLabel = formatTime(createdAt);
  return <p className="pr-1 text-sm text-muted-foreground">{createdAtLabel}</p>;
};

export default ThreadTime;
