import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
public hotel;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.getHotel();
  }

  
  // getHotel(){
  //   this.route.paramMap.subscribe(params =>{
  //     this.hotel = this.hotelService.getHotels();
  //     console.log(this.hotel);
  //   });
    
  // }

  getHotel(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.hotelService.getHotel(id).subscribe(
      hotel => {this.hotel = hotel}
    );
  }
}
