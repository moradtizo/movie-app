import { MoviesComponent } from './../movies/movies.component';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  popularTv:any =[]
  constructor(private moviesService :MoviesService){}
  upComingMovies: any=[]
  popular: any=[]
  ngOnInit(){
    this.getAllUpcoming()
    this.getAllPopular()
    this.getAllPopularTv()

  }

  getAllUpcoming(){
    this.moviesService.getUpComing().subscribe((results :any) =>{
      this.upComingMovies = results.results
      // console.log(results)

    })
  }
  getAllPopular(page: number=1){
    this.moviesService.getPopular(page).subscribe(({results} :any) => {
      this.popular = results
      console.log(results)

    })

  }
  getAllPopularTv(){
    this.moviesService.getTv("top_rated").subscribe(({results} :any) => {
      this.popularTv = results
      console.log(results)
    })

  }

}
