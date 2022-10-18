import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '', 
      password: ''
    });
  }


  submit(): void {
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
    .subscribe(() => this.router.navigate(['/login']));
  }
}
