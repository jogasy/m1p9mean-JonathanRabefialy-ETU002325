import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject, takeUntil } from 'rxjs';
import { DishService } from './dish.service';
import { Dish } from './types/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy {
  isAvailable: string = '0';
  data: Dish[] = [];
  modalRef!: BsModalRef;
  imageData!: string;
  fileName: string = '';
  file!: any;
  dish: Dish = {
    _id: '',
    img: '',
    imgPath: '',
    ingredients: '',
    name: '',
    price: 0,
    status: ''
  };

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private modalService: BsModalService, private service: DishService) {}

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
    this.getData();
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

  openAddDish(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  saveDish(): void {
    this.dish.img = this.fileName;
    this.dish.status = this.isAvailable;
    this.service.postDish(this.dish, this.file)
        .pipe(
          takeUntil(this.unsuscribe$)
        )
        .subscribe(x =>  this.getData());
    this.resetData();
    this.modalRef.hide();

  }

  private getData(): void {
    this.service.getData()
    .pipe(takeUntil(this.unsuscribe$))
    .subscribe(x => {
      this.data = [...x.dishes];
    });
  }

  private resetData(): void {
    this.dish = {
      _id: '',
      img: '',
      imgPath: '',
      ingredients: '',
      name: '',
      price: 0,
      status: ''
    };
    this.fileName = "";
    this.imageData = "";
  }
}
