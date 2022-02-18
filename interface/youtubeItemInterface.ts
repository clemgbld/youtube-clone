// interface Id {
//   kind: string;
//   videoId: string;
// }

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Thumbnails {
  default: Image;
  high: Image;
  medium: Image;
  maxres?: Image;
  standard?: Image;
}

interface Localized {
  title: string;
  description: string;
}

interface Snippet {
  tags?: string[];
  categoryId?: string;
  description?: string;
  channelId: string;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
}

interface ContentDetails {
  caption: boolean;
  contentRating: {};
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
}

export interface Statistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}

export interface Item {
  contentDetails: ContentDetails;
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface Response {
  etag: string;
  items: Item[];
  kind: string;
  pageInfo: PageInfo;
}

interface IdSearch {
  kind: string;
  videoId: string;
}

interface SnippetSearch {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

export interface ItemSearch {
  etag: string;
  id: IdSearch;
  kind: string;
  snippet: SnippetSearch;
}

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId?: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: string;
    moderationStatus: string;
    publishedAt: string;
    updatedAt: string;
  };
}

interface SnippetComment {
  channelId: string;
  videoId: string;
  topLevelComment: Comment;
  canReply: boolean;
  totalReplyCount: string;
  isPublic: boolean;
}

export interface ItemComment {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetComment;
  replies?: {
    comments: Comment[];
  };
}
