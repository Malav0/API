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
  malav:any[]=[]
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
    this.localItem=localStorage.getItem("user")
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
    this.alluser = JSON.parse(localStorage.getItem('user') || '[]');

    this.common.getAll(this.selectedLevel.id).subscribe((response:any) => {
      console.log(response, 'check');
      this.alluser = this.alluser.concat(response['data'])
      localStorage.setItem("user",JSON.stringify(this.alluser));
      this.alluser = JSON.parse(localStorage.getItem('user') || '[]');
      
    });
    // localStorage.setItem("alluser",JSON.stringify(this.allUser));
  }

  deletePerson(data:any){
    console.log(data,"check");
    this.alluser.length = 0
    this.alluser = JSON.parse(localStorage.getItem('user') || '[]');
    this.alluser = this.alluser.filter(item=>item.id != data)
    localStorage.setItem("user",JSON.stringify(this.alluser));
    console.log(this.alluser,"check2");

        // localStorage.removeItem("");
  }
}
