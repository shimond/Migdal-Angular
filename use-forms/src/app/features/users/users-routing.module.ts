import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

import { UsersComponent } from './users.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list', component: UserListPageComponent
      },
      {
        path: 'edit/:idOfUser', component: EditUserPageComponent
      }

      // http://zap.co.il/products/hp/printers/hp9983?sort=a#yes
      // Url Parameter (routes) - required
      // QS = after ? 
      // # - only one parameter
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
