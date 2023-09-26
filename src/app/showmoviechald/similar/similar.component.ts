import { ActivatedRoute } from '@angular/router';
import { MoviesComponent } from './../../pages/movies/movies.component';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit  {

  SimilarMovie :any=[]
constructor(private moviesService: MoviesService, private route : ActivatedRoute){}

ngOnInit(): void {
  this.route.parent?.params.subscribe((params: any) => this.getSimilar(params.id))
}
getSimilar(id:number){
  this.moviesService.gitSimilarMovie(id).subscribe(({results} :any) =>{
   this.SimilarMovie=results
  } )

}
}
