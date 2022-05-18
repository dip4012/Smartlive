import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { LevelsComponent } from './components/levels/levels.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
