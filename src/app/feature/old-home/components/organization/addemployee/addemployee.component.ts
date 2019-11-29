import { Component, OnInit } from '@angular/core';
import axios from 'axios';
axios.defaults.withCredentials = true; 
import { Router } from '@angular/router'
import { stringify } from 'querystring';
// import  from ''

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  public user:any = {
    name:'',
    age:'',
    gender:'',
    phone:'',
    address:'',
    number:'',
    department_id:'',
    position:'',
    roles_id:''
  };

  constructor(public router:Router) { };

  ngOnInit() {
  };

  picchange(event:any){
    var img = event.target.files[0]
    this.user['image'] = img
    console.log(this.user)
  }


  onSubmit() {
    let form_data = new FormData();
    form_data.append('name',this.user.name);
    form_data.append('age',this.user.age);
    form_data.append('gender',this.user.gender);
    form_data.append('phone',this.user.phone);
    form_data.append('address',this.user.address);
    form_data.append('number',this.user.number);
    form_data.append('department_id',this.user.department_id);
    form_data.append('position',this.user.position);
    form_data.append('roles_id',this.user.roles_id);
    form_data.append('image',this.user.image)
    axios({
      url:'http://116.62.222.123:8000/ln/offer_userinfo/',
      method:'post',
      data:form_data,
      withCredentials:true,
    }).then((res)=>{
      console.log(res)
      if(res.data.code==200){
        alert('ok')
      }else if (res.data.code==4203){
        this.router.navigate(['/login'])
      }
    })
  }
}
