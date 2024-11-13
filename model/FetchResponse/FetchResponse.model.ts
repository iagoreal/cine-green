export default class FetchResponse<T> {
  constructor(
    public page?: string,
    public results?: Array<T>,
    public total_pages?: Number,
    public total_results?: Number,
  ) {}
}
