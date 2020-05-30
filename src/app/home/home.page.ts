import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private actionSheet: ActionSheetController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    
    ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Test Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log('you clicked me');
          }
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('you added me');
          }
        }
      ]
    });
    await actionSheet.present();
  }



  async presentalert() {
    const alert = await this.alertController.create({
      header: 'alert',
      subHeader: 'sub Alert',
      message: 'This is the alert message',
      buttons: [{
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log("clicked me");
        }
      }, {
        text: 'okay',
        cssClass: 'secondary',
        handler: () => {
          console.log("secondary click");
        }
      }, {
        text: 'open actionsheet',
        cssClass: 'primary',
        handler:
          async () => {
            this.presentActionSheet();
          }
      }


      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  
  redirectLogin(){
    this.router.navigate(['/list-hotel']);
  }

  redirectRegister(){
    this.router.navigate(['/registro']);
  }

  

}
