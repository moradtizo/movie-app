import { MoviesService } from 'src/app/services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.css']
})
export class ShowmoviesComponent implements OnInit  {
  sidebarVisible: boolean =false
  upComingMovies:any=[]
  details :any  = []
  ImagesMovie:any=[]
 SimilarMovie :any=[]
  constructor(private  route: ActivatedRoute ,private moviesService: MoviesService) {}
  ngOnInit() {
    this.route.params.subscribe((params: any) => this.getDetails(params.id))
    this.route.params.subscribe((params: any) => this.getSimilar(params.id))
    this.route.parent?.params.subscribe((params: any) => this.getImages(params.id))
    this.getAllUpcoming()
  }
  getDetails(id:number) {
    this.moviesService.gitOneMovie(id).subscribe((response :any) => this.details=response )
  }
  getSimilar(id:number){
    this.moviesService.gitSimilarMovie(id).subscribe(({results} :any) =>{
      console.log(results,"nez")
     this.SimilarMovie=results } )
  }
  getAllUpcoming(){
    this.moviesService.getUpComing().subscribe((results :any) =>{
      this.upComingMovies = results.results
      // console.log(results)

    })
  }

  getImages(id:number){
    this.moviesService.gitImagesMovie(id).subscribe(({backdrops} :any) =>{
      console.log(backdrops);
     this.ImagesMovie=backdrops
    } )

  }
}
