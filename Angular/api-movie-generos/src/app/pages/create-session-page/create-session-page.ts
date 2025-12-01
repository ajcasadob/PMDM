import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { CreateSessionDto } from '../../dto/create-session.dto';

@Component({
  selector: 'app-create-session-page',
  imports: [RouterLink],
  templateUrl: './create-session-page.html',
  styleUrl: './create-session-page.css',
})
export class CreateSessionPage implements OnInit {


constructor(private route : ActivatedRoute, private authenticationService : AuthenticationService, private router: Router){}


loading = true;




  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      const approved = params['approved'];
      const requestToken = params['request_token'];
      var sessionDto = new CreateSessionDto(requestToken);
      localStorage.setItem('request_token',requestToken)

      if(approved === 'true'){
        this.authenticationService.createSession(sessionDto).subscribe(resp=>{
          localStorage.setItem('session_id',resp.session_id);
          this.authenticationService.createAccount().subscribe(accountResp =>{
            localStorage.setItem('account_id',accountResp.id.toString());
            this.router.navigate(['/']);
          });
        });
      }else{
        this.loading = false;
      }


    })

  }
errorMessage = '';
successMessage = '';

login(): void {
  this.loading = true;
  this.errorMessage = '';

  this.authenticationService.createRequestToken().subscribe({
    next: (response) => {
      if (response.success) {
        // Guardar el request token
        localStorage.setItem('request_token', response.request_token);
        
        // Redirigir al usuario a TMDB para aprobar
        const callbackUrl = encodeURIComponent(
          `${window.location.origin}/create-session`
        );
        window.location.href = 
          `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${callbackUrl}`;
      } else {
        this.errorMessage = 'No se pudo crear el token de autenticación';
        this.loading = false;
      }
    },
    error: (error) => {
      console.error('Error al crear request token:', error);
      this.errorMessage = 'Error al iniciar sesión. Intenta de nuevo.';
      this.loading = false;
    }
  });
}

isAuthenticated(): boolean {
  return !!localStorage.getItem('session_id');
}

getUsername(): string | null {
  return localStorage.getItem('username');
}

logout(): void {
  localStorage.removeItem('session_id');
  localStorage.removeItem('account_id');
  localStorage.removeItem('username');
  localStorage.removeItem('request_token');
  this.successMessage = '';
  this.errorMessage = '';
  this.router.navigate(['/']);
}

}
