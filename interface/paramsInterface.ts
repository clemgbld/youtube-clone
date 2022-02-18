export interface Params {
  params: {
    part: string;
    q?: string | string[] | undefined;
    id?: string | string[] | undefined;
    chart?: string;
    regionCode?: string;
    maxResults?: number;
    pageToken?: string;
    type?: string;
    key?: string;
    videoCategoryId?: string;
  };
}

export interface PostParams {
  params: {
    part: string;
  };

  headers?: {
    Authorization?: string;
  };
}
