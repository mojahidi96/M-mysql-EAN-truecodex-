import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';
import { passwordMatchValidator } from 'src/app/shared/validators/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  title: string;
  signupForm: FormGroup;
  model: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
    this.title = 'Create and account';
  }
  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]]
    }, { validators: passwordMatchValidator })
  }

  get f() { return this.signupForm.controls }

  onSubmit() {
    this.model = this.signupForm.value;
    this.authService.signup(this.model).subscribe(
      result => {
        if (!result.error()) {
          this.router.navigateByUrl('/auth/login');
        }
      })
  }
}
