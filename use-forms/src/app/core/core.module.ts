import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { MockUsersService } from './mock-services/users.service';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

const services = [UsersService];
const mockServices = [{ provide: UsersService, useClass: MockUsersService }];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // providers: [...services],
  // providers: [...mockServices]
  providers: environment.useMock ? mockServices : services

})
export class CoreModule { }
