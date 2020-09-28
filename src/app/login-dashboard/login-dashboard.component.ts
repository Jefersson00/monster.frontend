import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginDTO } from 'src/dto/LoginDTO';
import { UtenteService } from 'src/service/utente.service';


@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit {

  loginDTO: LoginDTO;
  
  constructor(private service:UtenteService, private router: Router) { }

  ngOnInit(): void {
  }
  login(f: NgForm): void {
    
    this.loginDTO = new LoginDTO(f.value.email, f.value.password);

    this.service.login(this.loginDTO).subscribe(

      (user) => {

        if (user != null) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          // console.log("funziona");
          this.router.navigate(['/home-dashboard']);
          
        }
        else{

          // console.log("funziona errore");
          this.router.navigate(['/login']);
        }

      }
      
    );
  }

}
