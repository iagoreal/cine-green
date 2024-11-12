import type { Genres } from './Genres.model';
import type { ProductionCompanies } from './ProductionCompanies.model';
import type { ProductionCountries } from './ProductionCountries.model';
import type { SpokenLanguages } from './SpokenLanguages.model';

export class MovieDetail {
  constructor(
    public adult?: boolean,
    public backdrop_path?: string | null,
    public genre_ids?: number[],
    public id?: number,
    public original_language?: string,
    public original_title?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string | null,
    public release_date?: string,
    public title?: string,
    public video?: boolean,
    public vote_average?: number,
    public vote_count?: number,
    public belongs_to_collection?: object | null,
    public budget?: number,
    public genres?: Genres[],
    public homepage?: string | null,
    public imdb_id?: string | null,
    public production_companies?: ProductionCompanies[],
    public production_countries?: ProductionCountries[],
    public revenue?: number,
    public runtime?: number | null,
    public spoken_languages?: SpokenLanguages[],
    public status?: string,
    public tagline?: string | null,
  ) {}
}
