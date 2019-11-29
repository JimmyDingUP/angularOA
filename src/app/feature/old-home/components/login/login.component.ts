import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router'
axios.defaults.withCredentials = true; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public peopleinfo:any = {
    name:'',
    password:''
  }

  constructor(public router:Router) { 
    
   };

  ngOnInit() {
  };
  signin(){
    
    axios.post('http://116.62.222.123:8000/ln/login/',this.peopleinfo).then((res)=>{
      
      if(res.data.code==200){
        this.router.navigate(['/index']);
        }
      else{
        console.log(res)
      }
    })
  }

}
