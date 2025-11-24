import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person } from '../../interfaces/people-popular-list.interface';
import { Movie } from '../../interfaces/movie-popular-list.interface';
import { PeoplePopularListService } from '../../services/people-popular-list-service';
import { MoviePopularListService } from '../../services/movie-popular-list-service';

@Component({
  selector: 'app-home-pages-page',
  imports: [RouterLink],
  templateUrl: './home-pages-page.html',
  styleUrl: './home-pages-page.css',
})
export class HomePagesPage implements OnInit {


popularList:Person []=[]
MoviePopularList:Movie []=[]

constructor(private servicePeople: PeoplePopularListService, private serviceMovie : MoviePopularListService){}


  ngOnInit(): void {

    this.servicePeople.getList().subscribe(resp => {
      this.popularList = resp.results; 
    })


    this.serviceMovie.getListMovie().subscribe(resp=>{
      this.MoviePopularList=resp.results;
    })

  }




}
