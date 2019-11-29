import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldHomeComponent } from './old-home.component';
import {HomeRoutingModule} from './old-home-routing.module';
import {NgZorroAntdModule, NzButtonModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [OldHomeComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    HomeRoutingModule,
    NgZorroAntdModule
  ]
})
export class OldHomeModule { }
