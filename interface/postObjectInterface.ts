export interface PostObj {
  snippet: {
    videoId: string | string[] | undefined;
    topLevelComment: {
      snippet: {
        textOriginal: string;
      };
    };
  };
}
