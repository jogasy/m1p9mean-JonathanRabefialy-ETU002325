import { DishService } from './dish.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
  imageData!: string;
  fileName!: string;
  file!: any;
  dish: Dish = {
    _id: '',
    img: '',
    imgPath: '',
    ingredients: '',
    name: '',
    price: 0,
    status: 0
  };

  @ViewChild("available", {static: true}) available!: ElementRef;
  @ViewChild("unavailable", {static: true}) unavailable!: ElementRef;

  constructor(private modalService: BsModalService, private service: DishService) {}

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files![0];
    this.file = files;
    console.log("file", this.file);
    this.fileName = files.name;
    console.log("fileName", this.fileName);
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (files && allowedMimeTypes.includes(files.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      }
      reader.readAsDataURL(files);
    }

  }

  openAddDish(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  saveDish(): void {
    console.log(this.dish);
    this.modalRef.hide();
  }

}
