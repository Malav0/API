import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder} from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup
  email:any=''
  password:any=''

  constructor(private frmbuilder:FormBuilder,private common: CommonService) { 
    this.loginform=frmbuilder.group({
      email:new FormControl(),
      password:new FormControl()
    });
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginform.value);
    this.common.login(this.loginform.value).subscribe((response:any) => {
      console.log(response);
    });
  }
}
