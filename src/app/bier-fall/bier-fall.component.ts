import { Component } from '@angular/core';
import { ButtonSet } from './models/buttonset';

@Component({
  selector: 'app-bier-fall',
  templateUrl: './bier-fall.component.html',
  styleUrls: ['./bier-fall.component.css'],
})
export class BierFallComponent {
  public dunkelBtnText: string = 'Dunkel';
  public hellBtnText: string = 'Hell';
  public weizenBtnText: string = 'Weizen';
  public bierChooser: string = 'Choose Your Bier';
  public imgUrl: string = '';

  setChoosenBier(bier: string): void {
    this.bierChooser = `You have choosen the ${bier}!`;
    if (bier === 'dunkel') {
      this.imgUrl = '../../assets/images/dunkel.jpg';
    } else if (bier === 'hell') {
      this.imgUrl = '../../assets/images/hell.jpg';
    } else if (bier === 'weizen') {
      this.imgUrl = '../../assets/images/weizen.jpg';
    }
  }

  clearSide(): void {
    this.imgUrl = '';
    this.bierChooser = 'Choose Your Bier';
  }
}

