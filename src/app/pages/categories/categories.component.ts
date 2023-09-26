import { ImagesComponent } from './../../showmoviechald/images/images.component';
import { Component, OnInit}from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import {  ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit  {
  genre :any=[]=[]
  getG:string ='';
  pop:any[]=[]
  catName:any='popular'
  totalpage: number = 1;
  totalResults:any;

  sidebarVisible: boolean=false;

  @ViewChild(Paginator) paginator: Paginator | undefined;
  constructor(private moviesService: MoviesService, private route :ActivatedRoute){}

ngOnInit(): void {
  // this.route.params.subscribe((params: any) => this.getMovieCat(params.id))
this.getMovieCat()
this.displayMovie()
}
  getMovieCat(){
     this.moviesService.getGenres().subscribe(({genres}:any)=> {
      console.log(genres);
      this.genre=genres
     })

  }
  displayMovie(){
    if(this.getG){
      this.catName = this.getG.toString();
    }
    if(this.catName === "popular"){
      this.moviesService.getPopular(this.catName).subscribe((data:any)=>{
        this.pop= data.results.splice(0,18);
        this.totalpage = data.total_pages;
         this.totalResults = data.total_results;
         this.paginator?.changePage(0);
      })
    }
    else{
      this.moviesService.getCatByM(this.catName).subscribe((res: any)=>{
        this.pop= res.results.splice(0,18);;
         this.totalResults = res.total_results > 10000 ? 10000 : res.total_results;
         this.paginator?.changePage(0); // Reset paginator to first page
      })
    }
  }
  onPageChange(event:any){
    if(this.catName == "popular"){
      this.moviesService.getPopular(event?.page+1 ).subscribe((data:any)=>{
        this.pop = data.results.splice(0,18);;
        this.totalpage = data.total_pages;
         this.totalResults = data.total_results;
      })
    }
    else{
      this.moviesService.getCatByM(this.catName,(event.page+1)).subscribe((res: any)=>{
        this.pop = res.results.splice(0,18);;
         this.totalResults = res.total_results > 10000 ? 10000 : res.total_results;
      })
    }
}



  // searchMovies() {
  //   this.moviesService.getCatByM(this.catName).subscribe((data: any) => {
  //     this.movies = data.results;
  //   });
  // }

}
