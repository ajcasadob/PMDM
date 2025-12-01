import { Component, OnInit } from '@angular/core';
import { ListDetailsResponse, ListMovie } from '../../interfaces/list-details.interface';
import { ListDetailsService } from '../../services/list-details-service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-details-page',
  imports: [DatePipe],
  templateUrl: './list-details-page.html',
  styleUrl: './list-details-page.css',
})
export class ListDetailsPage implements OnInit {


 listDetails: ListDetailsResponse | null = null;
  movies: ListMovie[] = [];
  isLoading = false;
  errorMessage = '';
  listId: number = 0;

  constructor(
    private listDetailsService: ListDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listId = +params['id'];
      if (this.listId) {
        this.loadListDetails();
      }
    });
  }

  loadListDetails(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.listDetailsService.getListDetails(this.listId).subscribe({
      next: (response) => {
        this.listDetails = response;
        this.movies = response.items;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar detalles de la lista:', error);
        this.errorMessage = 'Error al cargar los detalles de la lista';
        this.isLoading = false;
      }
    });
  }

  getPosterUrl(posterPath: string | null): string {
    return posterPath 
      ? `https://image.tmdb.org/t/p/w500${posterPath}`
      : 'assets/images/no-poster.png';
  }

  getBackdropUrl(backdropPath: string | null): string {
    return backdropPath 
      ? `https://image.tmdb.org/t/p/original${backdropPath}`
      : 'assets/images/no-backdrop.png';
  }

  goBack(): void {
    this.router.navigate(['/mis-listas']);
  }

}
