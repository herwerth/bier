import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hell',
  templateUrl: './hell.component.html',
  styleUrls: ['./hell.component.css']
})
export class hellComponent {
  @Input('btnText') public buttonText?: string;
  @Output() clickEvent = new EventEmitter<string>();

  public choosenBier: string = 'hell';

  public chooseSide(bier: string): void {
    this.clickEvent.emit(bier);
  }
}

