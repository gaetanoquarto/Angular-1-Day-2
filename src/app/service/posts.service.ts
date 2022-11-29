import { Post } from "../models/post";

export async function getPosts(): Promise <Post[]> {
  return await (await fetch('../../assets/db.json')).json()
}
