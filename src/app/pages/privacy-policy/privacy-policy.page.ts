import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content!: IonContent;

  constructor() { }

  scrollToTop() {
    this.content.scrollToTop(400); 
  }

  ngOnInit() {
  }

}
