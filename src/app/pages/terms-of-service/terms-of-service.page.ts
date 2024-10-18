import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.page.html',
  styleUrls: ['./terms-of-service.page.scss'],
})
export class TermsOfServicePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content!: IonContent;

  constructor() { }

  scrollToTop() {
    this.content.scrollToTop(400); 
  }

  ngOnInit() {
  }

}
