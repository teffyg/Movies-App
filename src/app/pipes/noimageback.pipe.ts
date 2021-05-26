import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimageback'
})
export class NoimagebackPipe implements PipeTransform {

  transform(back_img: any): string {
    if( !back_img ) {
      return 'assets/img/noimageback.jpg'
    }

    if( back_img.length > 0 ){
      return  "https://image.tmdb.org/t/p/w300"+ back_img;
    } else {
      return 'assets/img/noimageback.jpg'
    }
  } 

}
