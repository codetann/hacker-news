import { Api } from "./api";

export class Live extends Api {
  public async getMaxItem(): Promise<number> {
    return await this.get<number>(`${this.baseUrl}/maxitem.json`);
  }

  public async getTopStories(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/topstories.json`);
  }

  public async getNewStories(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/newstories.json`);
  }

  public async getAskStories(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/askstories.json`);
  }

  public async getShowStories(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/showstories.json`);
  }

  public async getJobStories(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/jobstories.json`);
  }

  public async getUpdates(): Promise<number[]> {
    return await this.get<number[]>(`${this.baseUrl}/updates.json`);
  }
}
