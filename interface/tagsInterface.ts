export interface Tags {
  tags: string[];
  activeTag: string;
  goToSelectedTag: (tagText: string) => void;
  addTag: (tagText: string) => void;
 
}
