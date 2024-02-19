import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/core/services/shared-service.service';

// Login Auth
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  nik!: number;
  password!: string;
  role_id!: any;
  userArea_id!: any;
  loginError!: boolean;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(private authService: AuthService, private router: Router, private cdRef: ChangeDetectorRef, private sharedService: SharedServiceService) { }

  ngOnInit(): void {

  }

  /**
   * Form submit
   */
   onSubmit() {
    this.authService.login(this.nik, this.password).subscribe(
      (response) => {
        this.authService.saveToken(response.token, response.userData[0].role_id, response.userData[0].id_user, response.userData[0].nama_user, response.userData[0].name, response.userData[0].nama_area, response.userData[0].nik, response.userData[0].group_id);
        this.sharedService.notifyUserLoggedIn();
        // Simpan token setelah berhasil login
        this.router.navigate(['']);
        this.cdRef.detectChanges();
        
      },
      (error) => {
        this.loginError = true;
      }
    );
  }


}
