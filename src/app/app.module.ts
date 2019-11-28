import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { LoginComponent } from './components/login/login.component';
import { SalaryComponent } from './components/salary/salary.component';
import { CheckingComponent } from './components/checking/checking.component';
import { SidebarComponent } from './components/bar/sidebar/sidebar.component';
import { TopbarComponent } from './components/bar/topbar/topbar.component';
import { ContentComponent } from './components/bar/content/content.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AddemployeeComponent } from './components/organization/addemployee/addemployee.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { EditemployeeComponent } from './components/organization/editemployee/editemployee.component';
import { ReportComponent } from './components/report/report.component';
import { LeaveComponent } from './components/checking/leave/leave.component';
import { AddleaveComponent } from './components/checking/leave/addleave/addleave.component';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
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
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
