import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../app/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
  loginForm!: FormGroup;
  constructor(private userSrv: UserService, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  getlogin = () => {
    try {
      if (this.loginForm.valid) {
        this.userSrv.login(this.loginForm.value).subscribe((res: any) => {
          console.log('res:', res);
          localStorage.setItem('token', res.token)
          this.router.navigateByUrl('dashboard');
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
