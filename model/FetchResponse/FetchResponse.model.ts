import type { TrendingAll } from '../TrendingAll/TrendingAll.model';

export default interface FetchResponse {
  page: string;
  results: TrendingAll[];
  total_pages: Number;
  total_results: Number;
}
