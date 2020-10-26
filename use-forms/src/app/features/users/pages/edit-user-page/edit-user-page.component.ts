import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

  user$: Observable<UserModel>;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap(p => this.usersService.getUserById(+p.idOfUser)));

  }

}
