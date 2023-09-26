import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit{

  CreditsMovie :any=[]
  constructor(private moviesService: MoviesService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => this.getCredits(params.id))
  }
  getCredits(id:number){
    this.moviesService.gitCreditsMovie(id).subscribe(({cast} :any) =>{
      console.log(cast)
     this.CreditsMovie=cast
    } )

  }

}
