import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject, takeUntil } from 'rxjs';
import { User } from './types/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[]= [];
  modalRef!: BsModalRef;
  newUser!: User;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private modalService: BsModalService, private service: UsersService) {}
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  private reset() {
    this.service.getUsers()
    .pipe(
      takeUntil(this.unsuscribe$)
    )
    .subscribe(x => this.users = [...x]);
    this.newUser = {
      _id: '',
      name: '',
      password: '',
      role: '0'
    }
  }

  ngOnInit(): void {
    this.reset();
  }

  modifyUser(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  addUser(): void {
    this.service.addUser(this.newUser)
      .pipe(
        takeUntil(this.unsuscribe$)
      )
      .subscribe(x => {
        this.reset();
      });
    this.modalRef.hide();
  }

  deleteUser(id: string): void {
    console.log(id);
    this.service.deleteUser(id)
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => this.reset());

  }



}
