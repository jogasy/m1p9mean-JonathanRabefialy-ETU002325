import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconsDirective } from './feather-icons.directive';



@NgModule({
  declarations: [
      FeatherIconsDirective
   ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatherIconsDirective
  ]
})
export class FeatherIconsModule { }
