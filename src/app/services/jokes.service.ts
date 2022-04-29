import { Injectable } from '@angular/core';
import {ChuckNorisJoke, ChuckNorisSearchJokes} from '../model/ChuckNorisJoke';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private readonly URL_RANDOMS = environment.joke.randomUrl;
  private readonly URL_SEARCH = environment.joke.searchUrl;
  private readonly URL_CATEGORIES = environment.joke.categoriesUrl;

  constructor(private httpClient: HttpClient) { }

  getRandomJoke(): Observable<ChuckNorisJoke> {
    return this.httpClient
      .get<ChuckNorisJoke>(this.URL_RANDOMS);
  }

  getJokeByCategory(cat: string): Observable<ChuckNorisJoke>{
    let params = new HttpParams();
    params = params.set('category', cat);

    return this.httpClient
      .get<ChuckNorisJoke>(this.URL_RANDOMS,
        {responseType: 'json', params});
  }

  getJokesByQuery(query: string): Observable<ChuckNorisSearchJokes>{
    let params = new HttpParams();
    params = params.set('query', query);

    return this.httpClient
      .get<ChuckNorisSearchJokes>(this.URL_SEARCH,
        {responseType: 'json', params});
  }

  getCategories(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>(this.URL_CATEGORIES);
  }
}
