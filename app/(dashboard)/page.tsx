import { CreateThreadDailogx } from "../../components/thread/thread-create-post-dialog";
import { Speator } from "@/components/speator";
import Avatar from "../../components/user-card/user-avatar";
import ThreadAll from "@/components/thread/thread-all";

const DashboarPage = () => {
  return (
    <div className="h-auto max-w-xl mx-auto">
      <div className="flex items-center py-4 px-2">
        <Avatar />
        <CreateThreadDailogx />
      </div>
      <Speator />
      <ThreadAll />
    </div>
  );
};

export default DashboarPage;
