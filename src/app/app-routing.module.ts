import { TvDetailsComponent } from './tv-tv/tv-details/tv-details.component';
import { VideosComponent } from './showmoviechald/videos/videos.component';
import { ImagesComponent } from './showmoviechald/images/images.component';
import { ActorsComponent } from './showmoviechald/actors/actors.component';
import { SimilarComponent } from './showmoviechald/similar/similar.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TvComponent } from './pages/tv/tv.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
// import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchnowComponent } from './showmoviechald/watchnow/watchnow.component';
import { NgModule } from '@angular/core';
// import { RouterModule,Routes } from '@angular/router';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'Movies', component: MoviesComponent
  },
  {
    path: 'tv',component: TvComponent
  },
  {
    path: 'Categories',component: CategoriesComponent
  },
  {
    path: 'Showmovie',component: ShowmoviesComponent
  },

  {
    path: 'showMovie/:id',component: ShowmoviesComponent,
    children: [
      {
        path: 'similar',
        component: SimilarComponent
      },
      {
        path:'actors',
       component :ActorsComponent
      },
      {
        path:'images',
        component: ImagesComponent
      },
      {
        path:'videos',
        component: VideosComponent
      },
      {
        path:'watch',
        component: WatchnowComponent
      }

    ]
  },
  {
    path:'details/:id',
    component: TvDetailsComponent
  },
  {
    path: '**', redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
