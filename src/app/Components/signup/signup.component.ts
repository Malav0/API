import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  constructor(private fb: FormBuilder, private common: CommonService) {
    this.signupform = fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  signup() {
    console.log(this.signupform.value);
    this.common.signup(this.signupform.value).subscribe((response:any) => {
      console.log(response);
    });
    
  }

  // allUser() {
  //   this.common.getAll().subscribe((response:any) => {
  //     console.log(response, 'check');
  //   });
  // }

  
}
