import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit  {
  VideosMovie :any=[]
  constructor(private moviesService: MoviesService, private route : ActivatedRoute ,private domSanitizer:DomSanitizer
    ){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => this.getVideos(params.id))
  }
  getVideos(id:number){
    this.moviesService.gitVideosMovie(id).subscribe(({results} :any) =>{
      console.log(results);
     this.VideosMovie=results
    } )
  }
 
}
