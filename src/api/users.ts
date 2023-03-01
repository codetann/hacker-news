import { Api } from "./api";
import type { User } from "$/typings";

export class Users extends Api {
  public async getUser(id: string): Promise<User> {
    return await this.get<User>(`${this.baseUrl}/user/${id}.json`);
  }
}
