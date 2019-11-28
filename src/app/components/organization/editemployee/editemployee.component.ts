import { Component, OnInit } from '@angular/core';
import axios from 'axios';
axios.defaults.withCredentials = true; 
import { Router ,ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  public user:any = {
    name:'',
    age:'',
    gender:'',
    phone:'',
    address:'',
    number:'',
    department_id:'',
    position:'',
    roles_id:[]
  };
  // 初始化uid
  uid = '';

  constructor(
    public router:Router,
    private route:ActivatedRoute
    ) { };

  ngOnInit() {
    // 获取要修改的用户id
    this.route.queryParams.subscribe(p=>{
      this.uid = p.id
      console.log(this.uid)
    })
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
    form_data.append('image',this.user.image);
    form_data.append('user_id',this.uid)
    axios({
      url:'http://116.62.222.123:8000/ln/update_userinfo/',
      method:'PUT',
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
