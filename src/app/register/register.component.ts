import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelperserviceService } from '../helperservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
myForm!:FormGroup
  constructor(private _fb:FormBuilder, private helperservice:HelperserviceService) {}

  ngOnInit(): void {
    console.log('load')
    this.myForm=this._fb.group({
      Name : ["", Validators.required],
      Email : ["",Validators.required],
      PhoneNumber : ["",Validators.required],
      Password : ["",Validators.required]
    })
  }
  Submit(){
    console.log('in submit') 
    console.log(this.myForm.value)
    this.helperservice.postUser(this.myForm.value).subscribe(data=>{
      alert('Registered Successfully')
    })
  }
}
