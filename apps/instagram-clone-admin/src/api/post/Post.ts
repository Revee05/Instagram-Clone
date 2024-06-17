import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Post = {
  caption: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  image: JsonValue;
  likes?: Array<Like>;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
