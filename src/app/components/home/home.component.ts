import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public playingMovies: any[] =[];
  public popularMovies: any[] =[];
  public popularKids: any[] =[];

  constructor( public ms: MoviesService ){
    this.ms.getNowPlaying()
        .subscribe( data =>{
          console.log(data);
          this.playingMovies = data.slice(0,6);
        })
    this.ms.getPopular()
        .subscribe( data =>{
          // console.log(data);
          this.popularMovies = data.slice(0,6);
        })

    this.ms.getFamily()
        .subscribe( (data:any) =>{
          this.popularKids = data.slice(0,6);
        })
  
  }


  ngOnInit(): void {
  }

  
}
