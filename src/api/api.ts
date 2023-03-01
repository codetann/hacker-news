import axios from "axios";

export class Api {
  public baseUrl: string = "https://hacker-news.firebaseio.com/v0";

  protected async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }
}
