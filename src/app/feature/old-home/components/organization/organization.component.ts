import { Component, OnInit } from '@angular/core';
import axios from 'axios'
axios.defaults.withCredentials=true

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  public allusers:any = []

  constructor() { }

  ngOnInit() {
    axios({
      url:'http://116.62.222.123:8000/ln/all_userinfo/',
      method:'get',
    }).then((res)=>{
      console.log(res)
      if(res.data.code==200){
        this.allusers = res.data.message
      }
    })
  }

  showusers(){
    
  }
} 
