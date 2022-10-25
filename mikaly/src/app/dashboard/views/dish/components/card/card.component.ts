import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from 'src/app/home/types/dish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dish!: Dish;
  modalRef!: BsModalRef;
  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private modalService: BsModalService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {

  }

  openModifyDish(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
