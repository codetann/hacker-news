import { Api } from "./api";
import type { Story, Job, Comment, Poll, PollOpt } from "$/typings";

export class Items extends Api {
  public async getStory(id: string): Promise<Story> {
    return await this.get<Story>(`${this.baseUrl}/item/${id}.json`);
  }

  public async getJob(id: string): Promise<Job> {
    return await this.get<Job>(`${this.baseUrl}/item/${id}.json`);
  }

  public async getComment(id: string): Promise<Comment> {
    return await this.get<Comment>(`${this.baseUrl}/item/${id}.json`);
  }

  public async getPoll(id: string): Promise<Poll> {
    return await this.get<Poll>(`${this.baseUrl}/item/${id}.json`);
  }

  public async getPollOpt(id: string): Promise<PollOpt> {
    return await this.get<PollOpt>(`${this.baseUrl}/item/${id}.json`);
  }
}
