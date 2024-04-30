"use client"
import { Suspense } from "react";
import Loading from "../auth/loading";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";import ThreadList from "./thread-list";
;

const ThreadAll = () => {
  return (
    <Suspense>
      <ThreadRSC />
    </Suspense>
  );
};

async function ThreadRSC() {
  const data = useQuery(api.threads.getAll);
  if (!data) return <Loading />;
  return(
    <ThreadList threads={data} />
  )
}

export default ThreadAll;
