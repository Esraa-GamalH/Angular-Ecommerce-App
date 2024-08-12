import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  TouchedEmail : boolean = false;
  TouchedPassword : boolean = false;
  fieldTextType: boolean = false;

  onSubmitTemplateBased(form : any){    
    if (form.controls.userEmail.untouched){
      this.TouchedEmail = true;
    }
    if (form.controls.userPassword.untouched){
      this.TouchedPassword = true;
    }
  }

  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }
}
