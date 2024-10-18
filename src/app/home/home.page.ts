import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryModalComponent } from '../components/category-modal/category-modal.component';
import { NotificationModalComponent } from '../components/notification-modal/notification-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private modalController: ModalController) {}

  async openCategoryModal() {
    const modal = await this.modalController.create({
      component: CategoryModalComponent
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        console.log('Selected Categories from Modal:', result.data);
        
      }
    });

    return await modal.present();
  }

  async openNotificationModal() {
    const modal = await this.modalController.create({
      component: NotificationModalComponent
    });
    return await modal.present();
  }

}
