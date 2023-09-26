import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import{HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './cpmponents/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';
import { SimilarComponent } from './showmoviechald/similar/similar.component';
import { ActorsComponent } from './showmoviechald/actors/actors.component';
import { ImagesComponent } from './showmoviechald/images/images.component';
import { VideosComponent } from './showmoviechald/videos/videos.component';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { TvCardComponent } from './tv-tv/tv-card/tv-card.component';
import { TvSliderComponent } from './tv-tv/tv-slider/tv-slider.component';
import { TvDetailsComponent } from './tv-tv/tv-details/tv-details.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchnowComponent } from './showmoviechald/watchnow/watchnow.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowmoviesComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    VideosComponent,
    YoutubeEmbedComponent,
    TvCardComponent,
    TvSliderComponent,
    TvDetailsComponent,
    WatchnowComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
