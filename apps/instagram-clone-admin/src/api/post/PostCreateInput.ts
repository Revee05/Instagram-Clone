import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  caption?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  image?: InputJsonValue;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
