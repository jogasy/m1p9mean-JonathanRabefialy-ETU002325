import { DishService } from './dish.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Dish } from './types/dish';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  data$: Observable<Dish[]> = this.service.getData();
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService, private service: DishService) {}

  ngOnInit(): void {
  }

  openAddDish(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
