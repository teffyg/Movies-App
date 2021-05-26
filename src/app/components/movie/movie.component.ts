import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie:Movie = {
    name: "",
    poster: "",
    back_img: "",
    text: "",
    rate: 0,
    genres: [],
    release_date: ""
    }
   
   public genres: any[] = [];

  constructor( public ms:MoviesService,
               private route:ActivatedRoute,
               private _location: Location  ) {
  
                }

  ngOnInit(): void {

    this.route.params
    .subscribe(params=>{
      let id = params['id'];
      this.ms.getMovie(id)
      .subscribe((data:any) => {
        console.log(data);
        this.movie.name = data.original_title;
        this.movie.text = data.overview;
        this.movie.back_img = data.backdrop_path;
        this.movie.poster = data.poster_path;
        this.movie.rate = data.vote_average;
        this.movie.genres = data.genres;
        this.movie.release_date = data.release_date;

      })
    })
  }

  

  public goBack() {
    this._location.back()

  }

}
