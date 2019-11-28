import { Component, OnInit } from '@angular/core';
import axios from 'axios';
axios.defaults.withCredentials = true; 

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  public anno:any = {
    title:'',
    content:''
  };

  public announcement_list = new Array;
  constructor() { };

  ngOnInit() {
    axios.get('http://116.62.222.123:8000/ln/check_announcement/').then((res)=>{
      console.log(res)
      if(res.data.code==200){
        this.announcement_list = res.data.message
      }
    })
  }
  onsubmit() {
    axios.post('http://116.62.222.123:8000/ln/send_announcement/',this.anno).then((res)=>{
      if(res.data.code==200){
        alert('添加成功')
        axios.get('http://116.62.222.123:8000/ln/check_announcement/').then((res)=>{
            console.log(res)
            if(res.data.code==200){
              this.announcement_list = res.data.message
            }
          })
      }
      console.log(res)
    })
  }
}
