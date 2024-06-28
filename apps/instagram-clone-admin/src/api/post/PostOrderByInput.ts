import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  caption?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
