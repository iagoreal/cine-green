import type { NitroFetchRequest, $Fetch } from 'nitropack';
import type FetchResponse from '~/model/FetchResponse/FetchResponse.model';
import type { Movie } from '~/model/Movie/Movie.model';

export const getMovies = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(params?: {}): Promise<FetchResponse<Movie>> {
    return fetch<FetchResponse<Movie>>('/movie/now_playing', params);
  },
});
