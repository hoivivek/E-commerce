import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup
  constructor(private _fb:FormBuilder) {}

  ngOnInit(): void {
    console.log('loading')
    this.myForm=this._fb.group({
      Email : ["",Validators.required],
      Password : ["",Validators.required]
    })
  }
  
}
