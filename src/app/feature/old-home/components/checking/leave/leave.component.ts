import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  allleaves = [];
  constructor() { };

  ngOnInit() {
    axios({
      url:'http://116.62.222.123:8000/ln/x/',
      method:'get',
      withCredentials:true
    }).then((res)=>{
      if(res.data.code==200){
        this.allleaves = res.data.message
      }
    })
  }

}
