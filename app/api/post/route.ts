import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { threads, caption } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const post = await db.thread.create({
      data: {
        userId,
        threads,
        caption,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[Post]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
