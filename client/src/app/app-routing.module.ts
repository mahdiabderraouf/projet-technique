import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from '@app/views/dashboard/campaigns/create/create.component';
import { CampaignComponent } from '@app/views/campaigns/campaign.component';
import { PageNotFoundComponentComponent } from '@app/views/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from '@app/views/auth/login/login.component';
import { GuestGuard } from './guards/guest.guard';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent as AdminHomeComponent } from '@app/views/dashboard/index/index.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './views/dashboard/profile/profile.component';
import { AvatarComponent } from './views/dashboard/avatar/avatar.component';
import { HomeComponent } from './views/home/home.component';
import { IndexComponent as CampaignsIndexComponent } from './views/dashboard/campaigns/index/index.component';
import { ShowComponent } from './views/campaigns/show/show.component';
import { ShowComponent as DashboardShowComponent } from '@app/views/dashboard/campaigns/show/show.component';
import { AppointmentsComponent } from './views/dashboard/appointments/appointments.component';
import { PasswordComponent } from './views/dashboard/password/password.component';
import { EmailsSettingComponent } from './views/dashboard/emails-setting/emails-setting.component';
import { IndexComponent as UsersIndexComponent } from './views/dashboard/users/index/index.component';
import { EditComponent } from './views/dashboard/users/edit/edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard],
  },
  { path: 'campaigns', component: CampaignComponent },
  { path: 'campaigns/:slug', component: ShowComponent },
  {
    path: 'dashboard',
    component: AdminHomeComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/avatar', component: AvatarComponent },
      { path: 'oauth2callback', redirectTo: 'profile/emails-setting' },
      { path: 'profile/password', component: PasswordComponent },
      { path: 'profile/emails-setting', component: EmailsSettingComponent },
      { path: 'my-appointments', component: AppointmentsComponent },
      { path: 'campaigns', component: CampaignsIndexComponent },
      { path: 'campaigns/create', component: CreateCampaignComponent },
      { path: 'campaigns/:slug', component: DashboardShowComponent },
      { path: 'users', component: UsersIndexComponent },
      { path: 'users/:id', component: EditComponent },
    ],
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent }, // Should be a landing page not redirect
  { path: '404', component: PageNotFoundComponentComponent },
  { path: '**', redirectTo: '404' }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
