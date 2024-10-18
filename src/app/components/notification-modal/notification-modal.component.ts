import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Mode } from '@ionic/core';
// import { DeleteNotificationPopoverComponent } from '../delete-notification-popover/delete-notification-popover.component';
// import { NotificationService } from 'src/app/services/notification/notification.service';
import { RelativeTimePipe } from 'src/app/pipes/relative-time.pipe';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RelativeTimePipe
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class NotificationModalComponent  implements OnInit {

  notifications: any[] = [];
  

  constructor(private modalCtrl: ModalController, 
    private popoverController: PopoverController,
    // private notificationService: NotificationService,
  ) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: DeleteNotificationPopoverComponent,
  //     event: ev,
  //     translucent: true,
  //     mode: 'android' as Mode,
  //     cssClass: 'popover-class',
  //     backdropDismiss: true,
  //   });
  //   return await popover.present();
  // }

  ngOnInit() {
    // this.getNotification()
  }

  // async getNotification(){
  //   (await this.notificationService.getNotification()).subscribe((res:any)=>{
  //       // console.log(res);

  //       this.notifications = res;
  //   })
  // }

}
