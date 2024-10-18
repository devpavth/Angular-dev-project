import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SuggestionsModalComponent } from '../suggestions-modal/suggestions-modal.component';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent  implements OnInit {

  categories = [
    { name: 'Wallpaper', image: 'assets/wallpaper.jpg' },
    { name: 'Car', image: 'assets/car.jpg' },
    { name: 'Games', image: 'assets/games.jpg' },
    { name: 'Nature Photography', image: 'assets/nature.jpg' },
    { name: 'Technology', image: 'assets/technology.jpg' }
  ];

  selectedCategories: string[] = [];

  constructor(private modalController: ModalController) {}

  toggleCategory(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(item => item !== category);
    } else if (this.selectedCategories.length < 3) {
      this.selectedCategories.push(category);
    }
  }

  async submit() {
    console.log('Selected Categories:', this.selectedCategories);
    await this.modalController.dismiss(this.selectedCategories);
  }

  async cancel() {
    await this.modalController.dismiss();
  }

  getDynamicText(): string {
    const remaining = 3 - this.selectedCategories.length;
    if (remaining > 0) {
      return `Pick ${remaining} more`;
    } else {
      return '';
    }
  }  

  async openSuggestionsModal(){
    const modal = await this.modalController.create({
      component: SuggestionsModalComponent,
    });
    return await modal.present();
  }


  ngOnInit() {}

}
