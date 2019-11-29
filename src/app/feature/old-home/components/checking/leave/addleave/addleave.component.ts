import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
  dateRange = [];
  leave_detail:any = {
    leave_type:'',
    start:'',
    end:'',
    num:'',
    reason:'',
    approve:'4',
    leader:[2,3],

  }

  // datetime = moment().format("YYYY-MM-DD HH:mm:ss")

  constructor() { }

  ngOnInit() {

  }
  onSubmit(){
    let form_data = new FormData();
    form_data.append('leave_type',this.leave_detail.leave_type);
    form_data.append('start',this.leave_detail.start);
    form_data.append('end',this.leave_detail.end);
    form_data.append('num',this.leave_detail.num);
    form_data.append('reason',this.leave_detail.reason);
    form_data.append('approve_id',this.leave_detail.approve);
    form_data.append('leader_ids',this.leave_detail.leader);
    axios({
      url:'http://116.62.222.123:8000/ln/leave_api/',
      method:'post',
      data:form_data
    }).then((res)=>{
      if(res.data.code==200){
        console.log(res)
      }
    })
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
