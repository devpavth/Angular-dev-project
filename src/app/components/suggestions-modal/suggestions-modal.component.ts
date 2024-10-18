import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-suggestions-modal',
  templateUrl: './suggestions-modal.component.html',
  styleUrls: ['./suggestions-modal.component.scss'],
})
export class SuggestionsModalComponent  implements OnInit {

  suggestions = [
    {
      profileImage: 'assets/profile-images/profile3.jpg', 
      name: 'Gianna Doe',
      username: 'giannadoe',
      followedBy: 'Jane Smith'
    },
    {
      profileImage: 'assets/profile-images/profile2.jpg', 
      name: 'Alice White',
      username: 'alicewhite',
      followedBy: 'Bob Johnson'
    },
    {
      profileImage: 'assets/profile-images/profile3.jpg', 
      name: 'Emma Atkinson',
      username: 'emma_atkinson',
      followedBy: 'Bob Johnson'
    },
    {
      profileImage: 'assets/profile-images/profile3.jpg', 
      name: 'Natalie Anderson',
      username: 'natalie_anderson',
      followedBy: 'Bob Johnson'
    },
    {
      profileImage: 'assets/profile-images/profile2.jpg', 
      name: 'Mia Bell',
      username: 'miabell',
      followedBy: 'Bob Johnson'
    },
    {
      profileImage: 'assets/profile-images/profile3.jpg', 
      name: 'Evelyn Clarke',
      username: 'evelynclarke',
      followedBy: 'Bob Johnson'
    },
    {
      profileImage: 'assets/profile-images/profile2.jpg', 
      name: 'Amelia Evans',
      username: 'ameliaevans',
      followedBy: 'Bob Johnson'
    },
  ]

  constructor(private modalController: ModalController) { }

  closeModal(){
    this.modalController.dismiss();
  }

  addFriend(suggestion: any){
    console.log('Adding friend:', suggestion.name);
  }

  removeSuggestion(suggestion: any){
    this.suggestions = this.suggestions.filter(item => item !== suggestion);
  }

  ngOnInit() {}

}
