import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { SingerInfoComponent } from './singer-info/singer-info.component';


const routes: Routes = [
  {
    path: 'user-info/:id', component: UserInfoComponent
  },
  {
    path: 'singer-info/:id', component: SingerInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
