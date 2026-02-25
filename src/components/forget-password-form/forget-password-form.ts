import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../app/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './forget-password-form.html',
  styleUrl: './forget-password-form.css',
})
export class ForgetPasswordForm implements OnInit{
  EmailForm!: FormGroup;
  constructor(
    private userSrv: UserService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.EmailForm = new FormGroup({
      email: new FormControl(''),
    });
  }
  getMail = () => {
    try {
      if (this.EmailForm.valid) {
        this.userSrv.forgetPassword(this.EmailForm.value).subscribe((res: any) => {
          console.log('res:', res);
          alert("check mail")
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
