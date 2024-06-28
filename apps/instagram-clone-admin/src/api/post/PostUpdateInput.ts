import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  caption?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  image?: InputJsonValue;
  likes?: LikeUpdateManyWithoutPostsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
