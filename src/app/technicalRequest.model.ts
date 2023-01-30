export interface TechnicalRequestModel {
  name: string;
  selected?: boolean;
  articles: Article[];
}

export interface Article {
  name?: string;
  quantity?: number;
  selected?: boolean;
}
