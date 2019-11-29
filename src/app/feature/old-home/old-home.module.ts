import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldHomeComponent } from './old-home.component';
import {HomeRoutingModule} from './old-home-routing.module';



@NgModule({
  declarations: [OldHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class OldHomeModule { }
