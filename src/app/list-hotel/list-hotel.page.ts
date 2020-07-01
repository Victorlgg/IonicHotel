import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HotelService } from '../services/hotel.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.page.html',
  styleUrls: ['./list-hotel.page.scss'],
})
export class ListHotelPage implements OnInit {
  hoteles;
  fecha='';
  constructor(private router: Router,
    private menu: MenuController,
    private hotelService: HotelService
    ) { }

    //onLoad
  ngOnInit() {
    
    /* this.hotelService.getHotel().subscribe(response=>console.log(response)); */
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

  print(){
    //this.fecha = formatDate(this.fecha,'MM/dd/yy', "en-US");
    //console.log(this.fecha);
  }

  loadHotels(){
    this.fecha = formatDate(this.fecha,'yyyy-MM-dd', "en-US");
    this.hotelService.getHotels(this.fecha).subscribe(response=>{
      this.hoteles=response;
      //console.log(response);
    });
  }

  /* openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async openMenu() {
    await this.menuController.open();
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  } */

}
/*
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}*/

