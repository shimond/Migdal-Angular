import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserStatusSelectorComponent } from './components/user-status-selector/user-status-selector.component';


@NgModule({
  declarations: [UsersComponent, UserListPageComponent, EditUserPageComponent, UserEditComponent, UserStatusSelectorComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
