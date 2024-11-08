export class TrendingAll {
  constructor(
    public adult?: boolean,
    public backdrop_path?: string | null,
    public genre_ids?: number[],
    public id?: number,
    public original_language?: string,
    public original_title?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string | undefined,
    public release_date?: string,
    public title?: string,
    public video?: boolean,
    public vote_average?: number,
    public vote_count?: number,
    public first_air_date?: string,
    public name?: string,
    public origin_country?: string[],
    public original_name?: string,
    public media_type?: string,
  ) {}
}
