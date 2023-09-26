import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit{
  upComingTv: any=[]
  popularTv:any=[]
  constructor(private moviesService :MoviesService){}
  ngOnInit(){
    this.getAllPopular()
    this.getAllUpcoming()
  }

  getAllUpcoming(){
    this.moviesService.getUpComing().subscribe((results :any) =>{
      this.upComingTv = results.results
      // console.log(results)

    })
  }

  getAllPopular(){
    this.moviesService.getTv("top_rated").subscribe(({results} :any) => {
      this.popularTv = results
      console.log(results)
    })

  }
}
