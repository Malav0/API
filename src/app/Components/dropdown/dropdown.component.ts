import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  selectedLevel:any
  value:any
  localItem:any

  data:any[] = [
      {id: 1, name: "1"},
      {id: 2, name: "2"},
      
  ];

  User ={
    id:null,
    email:null,
    first_name:null,
    last_name:null,
    avtar:[]
  };

  alluser: any[];
  constructor(private common: CommonService) {
    this.localItem=localStorage.getItem("this.alluser")
    if(this.localItem == null){
      this.alluser=[];
    }
    else{
      this.alluser= JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }

  selected(){
    console.log(this.selectedLevel)
  }

  allUser(){
    console.log(this.selectedLevel.id)
    this.common.getAll(this.selectedLevel.id).subscribe((response:any) => {
      console.log(response, 'check');
      this.alluser = response['data']
      localStorage.setItem("user",JSON.stringify(this.alluser));
    });
    // localStorage.setItem("alluser",JSON.stringify(this.allUser));
  }
}
