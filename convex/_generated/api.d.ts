/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.10.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as clerk from "../clerk.js";
import type * as comments from "../comments.js";
import type * as file from "../file.js";
import type * as http from "../http.js";
import type * as like from "../like.js";
import type * as saved from "../saved.js";
import type * as thread from "../thread.js";
import type * as threadUser from "../threadUser.js";
import type * as threads from "../threads.js";
import type * as users from "../users.js";
import type * as utils from "../utils.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  clerk: typeof clerk;
  comments: typeof comments;
  file: typeof file;
  http: typeof http;
  like: typeof like;
  saved: typeof saved;
  thread: typeof thread;
  threadUser: typeof threadUser;
  threads: typeof threads;
  users: typeof users;
  utils: typeof utils;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
