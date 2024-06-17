import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  caption?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  image?: JsonFilter;
  likes?: LikeListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
