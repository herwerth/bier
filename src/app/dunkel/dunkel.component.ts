import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dunkel',
  templateUrl: './dunkel.component.html',
  styleUrls: ['./dunkel.component.css']
})
export class dunkelComponent {
  @Input('btnText') public buttonText?: string;
  @Output() clickEvent = new EventEmitter<string>();

  public choosenBier: string = 'dunkel';

  public chooseSide(bird: string): void {
    this.clickEvent.emit(bird);
  }
}
