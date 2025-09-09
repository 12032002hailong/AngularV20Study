import { Component, OnInit, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoginModel } from '../../core/models/interface/Employee.model';
import { EmployeeService } from '../../core/services/empoyee/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
  ],
})
export class LoginComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);
  passwordVisible = false;

  loginObj: LoginModel = new LoginModel();
  employService = inject(EmployeeService);
  router = inject(Router);

  validateForm = this.fb.group({
    emailId: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true),
  });
  constructor() {}

  ngOnInit() {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginObj = {
        emailId: this.validateForm.value.emailId || '',
        password: this.validateForm.value.password || '',
      };
      this.employService.onLogin(this.loginObj).subscribe({
        next: (result: any) => {
          if (result.result) {
            console.log('Login success');
            localStorage.setItem('leaveUser', JSON.stringify(result.data));
            this.router.navigateByUrl('/dashboard');
          } else {
            console.log(result.message);
          }
        },
        error: () => {
          console.log('API error');
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
