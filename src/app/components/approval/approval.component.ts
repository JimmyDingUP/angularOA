import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  today:any = Date.now();//或者today:any = new Date();
  timer:any;
  constructor() {
    
   }

  ngOnInit() {
      this.timer=setInterval(()=> {
        this.today = Date.now();// 或者this.today = new Date();
    }, 1000)
  }
  

  ngOnDestroy(){
  clearInterval(this.timer);
  }
  
    
  
}
