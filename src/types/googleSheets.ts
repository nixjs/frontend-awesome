export interface BaseSheetInfo {
  id: string;
  slug: string;
  name: string;
}
export interface CategorySheets extends BaseSheetInfo {}
export interface TagsSheets extends BaseSheetInfo {}

export interface ReactSheets extends BaseSheetInfo {
  url?: string;
  category: string;
}
export interface TypescriptSheet extends BaseSheetInfo {
  url?: string;
  category: string;
}
export interface ReactContentSheet extends BaseSheetInfo {
  description: string;
  category: string;
  url: string;
  tags1?: string;
  tags2?: string;
  tags3?: string;
  tags4?: string;
  tags5?: string;
}
