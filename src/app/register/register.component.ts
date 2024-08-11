import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  passwordRegExp : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).+$/;
  fieldTextType: boolean = false;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordRegExp),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^ ]*$'),
      ]),
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get confirmPassword(): any {
    return this.registerForm.get('confirmPassword');
  }
  get userName(): any {
    return this.registerForm.get('userName');
  }

  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  onReactiveBased() {
    console.log(this.registerForm);
  }
}
