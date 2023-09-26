import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tv-slider',
  templateUrl: './tv-slider.component.html',
  styleUrls: ['./tv-slider.component.css']
})
export class TvSliderComponent {
  @Input() itemsTv: any[]=[];
}
