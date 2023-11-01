import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weizen',
  templateUrl: './weizen.component.html',
  styleUrls: ['./weizen.component.css']
})
export class weizenComponent {
  @Input('btnText') public buttonText?: string;
  @Output() clickEvent = new EventEmitter<string>();

  public choosenBier: string = 'weizen';

  public chooseSide(bier: string): void {
    this.clickEvent.emit(bier);
  }
}

