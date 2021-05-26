import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map,filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey:string = "8921fc790bfbe45cd009814d2772fbc7";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http: HttpClient ) { }

  public getPopular():Observable<any[]>{

    let url = `${ this.urlMoviedb }/movie/popular?api_key=${this.apikey}`;

    return this.http.get( url )
            .pipe(map((res:any)=> {
                return res.results;
            }));
  }

  public getNowPlaying():Observable<any[]>{
    
    let url = `${ this.urlMoviedb }/movie/now_playing?api_key=${this.apikey}`;
    
    return this.http.get( url )
    .pipe(map((res:any)=> {
      return res.results;
    }));
  }
  public getFamily():Observable<any[]>{

    let url = `${ this.urlMoviedb }/movie/popular?api_key=${this.apikey}&sort_by=popularity.desc&with_genres=10751`;

    return this.http.get( url )
            .pipe( map((res:any) => { return res.results }), 
            );

  }

  public getGenres():Observable<any[]>{

    let url = `${ this.urlMoviedb }/genre/movie/list?api_key=${this.apikey}`;

    return this.http.get( url )
            .pipe(map((res:any)=> {
                return res;
            }));
  }

  public getMovie( id:number ){
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${this.apikey}`;
    return this.http.get( url )
            .pipe(map((res:any)=> {
                return res;
            }));

  }

  public search( keyword: string ):Observable<any[]>{
    
    let url = `${ this.urlMoviedb }/search/movie?api_key=${this.apikey}&query=${ keyword }`;
    
    return this.http.get( url )
    .pipe(map((res:any)=> {
      return res.results;
    }));
  }
}

export interface Movie {
  name: string,
  poster: string,
  back_img:string,
  text: string,
  rate: number,
  genres: any[],
  release_date: string
  }
