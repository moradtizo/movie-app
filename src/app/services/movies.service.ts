import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http :HttpClient){}

  url:string="https://api.themoviedb.org/3"
  apiKey: string="c728834c29064e3c13e47c46952e5421"
  option: string="upcoming"

 getUpComing() {
return this.http.get(`${this.url}/movie/${this.option}?api_key=${this.apiKey}`)
}
getPopular(page: number) {
  return this.http.get(`${this.url}/movie/popular?api_key=${this.apiKey}&page=${page}`)
}
gitOneMovie(id:number) {
  return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}`)
}
gitSimilarMovie(id:number) {
  return this.http.get(`${this.url}/movie/${id}/similar?api_key=${this.apiKey}`)
}

gitCreditsMovie(id:number) {
  return this.http.get(`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`)
}

gitImagesMovie(id:number) {
  return this.http.get(`${this.url}/movie/${id}/images?api_key=${this.apiKey}`)
}

gitVideosMovie(id:number) {
  return this.http.get(`${this.url}/movie/${id}/videos?api_key=${this.apiKey}`)
}
searchMovies(query : string,page:number = 1){
  return this.http.get(`${this.url}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`)
}
getMovies(page: number ){
  return this.http.get(`${this.url}/movie/popular?api_key=${this.apiKey}&page=${page}`)
}
//----------------------------------------------------------------------------------
getTv(kind: string){
  return this.http.get(`${this.url}/tv/${kind}?api_key=${this.apiKey}`)
}
getCatByM(categoryId:string, page:number=1){
  // return this.http.get(`${this.url}/discover/movie?api_key=${this.apiKey}&with_genres=${categoryId}&page=${page}`)
  return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&include_adult=false&with_genres=${categoryId}&page=${page}`)
}
getGenres(){
  return this.http.get(`${this.url}/genre/movie/list?api_key=${this.apiKey}`)
}

gitOneTv(id:number) {
  return this.http.get(`${this.url}/tv/${id}?api_key=${this.apiKey}`)
}

}
