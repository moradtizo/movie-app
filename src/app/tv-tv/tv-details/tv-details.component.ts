import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit  {
constructor(private moviesService:MoviesService,private route: ActivatedRoute){}
  details :any = []


ngOnInit(): void {
  this.route.params.subscribe((params: any) => this.getDetailsTv(params.id))
}


getDetailsTv(id:number){
  this.moviesService.gitOneTv(id).subscribe((response :any) => this.details=response )
}

}
