import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldHomeComponent } from './old-home.component';
import {HomeRoutingModule} from './old-home-routing.module';
import {NgZorroAntdModule, NzButtonModule} from 'ng-zorro-antd';
import {ContentComponent} from './components/bar/content/content.component';
import {SidebarComponent} from './components/bar/sidebar/sidebar.component';
import {TopbarComponent} from './components/bar/topbar/topbar.component';
import {SalaryComponent} from './components/salary/salary.component';
import {CheckingComponent} from './components/checking/checking.component';
import {AddemployeeComponent} from './components/organization/addemployee/addemployee.component';
import {LoginComponent} from './components/login/login.component';
import {ReportComponent} from './components/report/report.component';
import {AddleaveComponent} from './components/checking/leave/addleave/addleave.component';
import {ApprovalComponent} from './components/approval/approval.component';
import {EmptyComponent} from './components/empty/empty.component';
import {IndexComponent} from './components/index/index.component';
import {OrganizationComponent} from './components/organization/organization.component';
import {LeaveComponent} from './components/checking/leave/leave.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';
import {EditemployeeComponent} from './components/organization/editemployee/editemployee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AttendanceManagementComponent } from './components/attendance-management/attendance-management.component';


@NgModule({
  declarations: [OldHomeComponent, ContentComponent,
    SidebarComponent, TopbarComponent,
  IndexComponent,
  ApprovalComponent,
  LoginComponent,
  SalaryComponent,
  CheckingComponent,
  SidebarComponent,
  TopbarComponent,
  ContentComponent,
  AnnouncementComponent,
  AddemployeeComponent,
  OrganizationComponent,
  EditemployeeComponent,
  ReportComponent,
  LeaveComponent,
  AddleaveComponent,
  EmptyComponent,
  AttendanceManagementComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgZorroAntdModule
  ]
})
export class OldHomeModule { }
