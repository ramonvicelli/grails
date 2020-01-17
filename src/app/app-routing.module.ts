import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserStoryComponent } from './user-story/user-story.component';
import { SecurityUserComponent } from './security-user/security-user.component';


const routes: Routes = [{
  component: UserStoryComponent,
  data: {
    title: 'User Story'
  },
  path: '',
},
{
  component: SecurityUserComponent,
  data: {
    title: 'Security User'
  },
  path: 'security-user',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
