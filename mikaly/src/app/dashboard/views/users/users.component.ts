import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  modifyUser(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
