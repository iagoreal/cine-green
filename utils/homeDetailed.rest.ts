import type { NitroFetchRequest, $Fetch } from 'nitropack';
import FetchResponse from '~/model/FetchResponse/FetchResponse.model';
import type { MovieAndTvShow } from '~/model/movieAndTvShow/movieAndTvShow.model';
import type { QueryParamsModel } from '~/model/queryParams/queryParams.model';

export const getMovieOrTvShow = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(
    queryParams: QueryParamsModel,
  ): Promise<FetchResponse<MovieAndTvShow>> {
    return fetch<FetchResponse<MovieAndTvShow>>(
      `/${queryParams.type}/${queryParams.id}`,
    );
  },
});
