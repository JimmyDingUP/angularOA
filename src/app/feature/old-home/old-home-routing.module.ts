import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OldHomeComponent} from './old-home.component';
import {IndexComponent} from './components/index/index.component';
import {LoginComponent} from './components/login/login.component';
import {ApprovalComponent} from './components/approval/approval.component';
import {SalaryComponent} from './components/salary/salary.component';
import {EmptyComponent} from './components/empty/empty.component';
import {AddemployeeComponent} from './components/organization/addemployee/addemployee.component';
import {OrganizationComponent} from './components/organization/organization.component';
import {CheckingComponent} from './components/checking/checking.component';
import {LeaveComponent} from './components/checking/leave/leave.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';
import {ReportComponent} from './components/report/report.component';
import {AddleaveComponent} from './components/checking/leave/addleave/addleave.component';
import {EditemployeeComponent} from './components/organization/editemployee/editemployee.component';
import {AttendanceManagementComponent} from './components/attendance-management/attendance-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'attendance-management'
      },
      {
        path: 'attendance-management',
        component: AttendanceManagementComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'approval',
        component: ApprovalComponent
      },
      {
        path: 'announcement',
        component: AnnouncementComponent
      },
      {
        path: 'organization/addemployee',
        component: AddemployeeComponent
      },
      {
        path: 'organization',
        component: OrganizationComponent
      },
      {
        path: 'organization/editemployee',
        component: EditemployeeComponent
      },
      {
        path: 'checking',
        component: CheckingComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'salary',
        component: SalaryComponent
      },
      {
        path: 'checking/leave',
        component: LeaveComponent
      },
      {
        path: 'checking/leave/addleave',
        component: AddleaveComponent
      },
      {
        path: 'empty',
        component: EmptyComponent
      }
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
