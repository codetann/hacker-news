import { Items } from "./items";
import { Users } from "./users";
import { Live } from "./live";

export const api = {
  items: new Items(),
  users: new Users(),
  live: new Live(),
};
