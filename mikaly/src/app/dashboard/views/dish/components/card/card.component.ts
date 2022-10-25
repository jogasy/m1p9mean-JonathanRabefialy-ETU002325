import { DishService } from './../../dish.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Dish } from '../../types/dish';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dish!: Dish;
  updateDish!: Dish;
  modalRef!: BsModalRef;
  imageData: string = '';
  fileName: string = '';
  file!: any;
  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private modalService: BsModalService, private dishService: DishService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {

  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files![0];
    this.file = files;
    this.fileName = files.name;
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (files && allowedMimeTypes.includes(files.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      }
      reader.readAsDataURL(files);
    }

  }

  openModifyDish(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.updateDish = {
      _id: this.dish._id,
      img: this.dish.img,
      imgPath: this.dish.imgPath,
      ingredients: this.dish.ingredients,
      name: this.dish.name,
      price: this.dish.price,
      status: this.dish.status
    }
  }

  reset(): void {
    this.imageData = "";
  }

  update(updateDish: Dish): void {
    if(this.imageData === "") {
      this.dishService.putDish(updateDish._id, updateDish)
        .pipe(
          takeUntil(this.unsuscribe$)
        )
        .subscribe();
        this.modalRef.hide();
        this.dish = this.updateDish;
        this.reset();
    }else {
      this.updateDish.img = this.fileName;
      this.updateDish.imgPath = "";
      this.dishService.putImgDish(this.updateDish, this.file)
        .pipe(
          takeUntil(this.unsuscribe$)
        ).subscribe();
      this.modalRef.hide();
      this.updateDish.imgPath = this.imageData;
      this.dish = this.updateDish;
      this.reset();
    }
  }
}
