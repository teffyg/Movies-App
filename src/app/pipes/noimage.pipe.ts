import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(poster_path: any): string {
    if( !poster_path ) {
      return 'assets/img/noimage.png'
    }

    if( poster_path.length > 0 ){
      return  "https://image.tmdb.org/t/p/w300"+ poster_path;
    } else {
      return 'assets/img/noimage.png'
    }
  } 

}
