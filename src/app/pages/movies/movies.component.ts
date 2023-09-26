import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  search:any[] = [];
  query:string ="";
 constructor(private moviesService:MoviesService){}
ngOnInit(): void {
  this.getAllPopular()

}

 Search(page:number =1){
  this.moviesService.searchMovies(this.query,page).subscribe((res :any) => {
    console.log(res)
    this.search = res.results
  })
}
getAllPopular(page:number =1){
  this.moviesService.getPopular(page).subscribe((data :any) => {
   this.search= data.results
  })
}
paginate(event:any){

if(this.query== ''){
  this.getAllPopular(event.page +1)
}else{
  this.Search(event.page +1)
}

}
}
