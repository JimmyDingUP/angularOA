import { Component, OnInit } from '@angular/core';

declare let laydate;

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})

export class EmptyComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    laydate.render({
      elem: '#test10'
      ,type: 'datetime'
      ,range: true
    }); 
  }
}
