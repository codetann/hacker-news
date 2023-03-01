export interface Base {
  id: number;
  deleted?: boolean;
  type: string;
  by: string;
  time: number;
  dead?: boolean;
  kids?: number[];
}

export interface Job extends Base {
  text?: string;
  url?: string;
  title?: string;
}

export interface Story extends Base {
  url?: string;
  title?: string;
  score: number;
  descendants?: number;
}

export interface Comment extends Base {
  text?: string;
  parent?: number;
}

export interface Poll extends Base {
  parts: number[];
  descendants?: number;
  score?: number;
  title?: string;
  text?: string;
}

export interface PollOpt extends Base {
  parent?: number;
  score?: number;
}
