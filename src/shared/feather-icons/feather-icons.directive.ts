import { AfterViewInit, Directive, HostBinding, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Directive({
  selector: '[appFeatherIcons]'
})
export class FeatherIconsDirective implements AfterViewInit {
  @Input() color: string = '';
  @Input() width: string = '';
  @Input() height: string = '';

  @HostBinding() IconColor: string = this.color;
  @HostBinding() IconWidth: string = this.width;
  @HostBinding() IconHeight: string = this.height;

  ngAfterViewInit(): void {
    feather.replace();
  }

}
