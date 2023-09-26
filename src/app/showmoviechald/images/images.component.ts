import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
 
  @Input() images:any = {}
  ImagesMovie :any=[]
  constructor(private moviesService: MoviesService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => this.getImages(params.id))
  }
  getImages(id:number){
    this.moviesService.gitImagesMovie(id).subscribe(({backdrops} :any) =>{
      console.log(backdrops);
     this.ImagesMovie=backdrops
    } )

  }


}
