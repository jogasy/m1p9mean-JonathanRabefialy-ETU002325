import { DishService } from './dish.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef, OnDestroy, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { Dish } from './types/dish';
import { Observable, Subject, takeUntil } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
    status: 0
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
    this.dish.status = +this.isAvailable;
    this.service.postDish(this.dish, this.file)
        .pipe(
          takeUntil(this.unsuscribe$)
        )
        .subscribe(console.log);
    this.resetData();
    this.getData();
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
      status: 0
    };
    this.fileName = "";
    this.imageData = "";
  }
}
