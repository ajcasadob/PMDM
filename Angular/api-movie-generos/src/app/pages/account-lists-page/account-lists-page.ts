import { Component, OnInit } from '@angular/core';
import { AccountList } from '../../interfaces/account-lists.interface';
import { AccountListService } from '../../services/account-list-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-lists-page',
  imports: [RouterLink],
  templateUrl: './account-lists-page.html',
  styleUrl: './account-lists-page.css',
})
export class AccountListsPage implements OnInit {
  
  
   lists: AccountList[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalResults: number = 0;
  isLoading: boolean = false;
  errorMessage: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private accountListService: AccountListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
    if (this.isAuthenticated) {
      this.loadLists();
    }
  }

  checkAuthentication(): void {
    const accountId = localStorage.getItem('account_id');
    const sessionId = localStorage.getItem('session_id');
    this.isAuthenticated = !!(accountId && sessionId);
    
    if (!this.isAuthenticated) {
      this.errorMessage = 'Debes iniciar sesión para ver tus listas';
    }
  }

  loadLists(page: number = 1): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.accountListService.getAccountLists(page).subscribe({
      next: (response) => {
        this.lists = response.results;
        this.currentPage = response.page;
        this.totalPages = response.total_pages;
        this.totalResults = response.total_results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar las listas:', error);
        this.errorMessage = 'Error al cargar tus listas. Por favor, intenta de nuevo.';
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadLists(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/create-session']);
  }

  getPosterUrl(posterPath: string | null): string {
    return posterPath 
      ? `https://image.tmdb.org/t/p/w300${posterPath}`
      : 'assets/images/no-poster.png';
  }
}


