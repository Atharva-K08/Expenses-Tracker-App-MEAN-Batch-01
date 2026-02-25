import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../app/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private userSrv: UserService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''),
    });
  }
  getregister = () => {
    try {
      if (this.registerForm.valid) {
        if (this.registerForm.value.password == this.registerForm.value.cpassword) {
          this.userSrv.register(this.registerForm.value).subscribe((res: any) => {
            console.log('res:', res);
            this.router.navigateByUrl('login');
          });
        } else {
          alert("passwords not match")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
