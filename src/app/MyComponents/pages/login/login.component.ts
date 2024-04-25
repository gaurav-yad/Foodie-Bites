import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleComponent, ReactiveFormsModule, FormsModule, CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  isSubmitted = false;
    constructor(private fb : FormBuilder, private rt : Router){};
    ngOnInit(): void {
        this.loginForm = this.fb.group({
          email:['', Validators.required, Validators.email],
          password:['', Validators.required]
        })
    }

    get fc(){
      return this.loginForm.controls;
    }

    submit(){
      this.isSubmitted = true;
      if( this.loginForm.invalid )
        return;
      // alert(`Login done with Email: ${this.fc.email.value}`)
      this.rt.navigateByUrl('/dashboard')
    }
}
