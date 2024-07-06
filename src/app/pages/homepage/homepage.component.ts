import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef<HTMLVideoElement>;
  videoIsPlaying = false;

  constructor() {}

  ngOnInit(): void {}

  cars: Car[] = [
    {
      title: 'Ford Transit',
      status: 'Disponibile Ora',
      description:
        'Il Ford Transit è il furgone ideale per il trasporto di merci. Spazioso, affidabile e versatile.',
      url: 'assets/images/cars/ford_transit.jpg',
      logo: 'assets/images/cars/ford_tranist.png',
      price:100,
    },
    {
      title: 'Mercedes Sprinter',
      status: 'Disponibile Ora',
      description:
        'Il Mercedes Sprinter offre comfort e sicurezza, perfetto per il trasporto di passeggeri o merci.',
      url: 'assets/images/cars/mercedes_sprinter.jpg',
      logo: 'assets/images/cars/mercedes_logo.png',
      price: 100,
    },
    {
      title: 'Fiat Ducato',
      status: 'Disponibile Ora',
      description:
        'Il Fiat Ducato è il compagno affidabile per ogni tipo di trasporto, da piccoli a grandi carichi.',
      url: 'assets/images/cars/fiat_ducato.jpg',
      logo: 'assets/images/cars/fiat_logo.png',
      price: 100,
    },
    {
      title: 'Volkswagen Crafter',
      status: 'Disponibile Ora',
      description:
        'Il Volkswagen Crafter combina potenza e tecnologia per rendere ogni viaggio confortevole e sicuro.',
      url: 'assets/images/cars/vw_crafter.jpg',
      logo: 'assets/images/cars/vw_logo.png',
      price: 100,
    },
    {
      title: 'Renault Master',
      status: 'Disponibile Ora',
      description:
        'Il Renault Master è sinonimo di affidabilità e efficienza nel trasporto merci di ogni genere.',
      url: 'assets/images/cars/renault_master.jpg',
      logo: 'assets/images/cars/renault_logo.png',
      price: 100,
    },
  ];

 
  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  };

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    centeredSlides: true,
    slideToClickedSlide: true,
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }

  playVideo() {
    if (!this.videoIsPlaying) {
      const video = this.videoPlayer.nativeElement as HTMLVideoElement;
      if (video) {
        video.play();
        this.videoIsPlaying = true;
      }
    }
  }

  pauseVideo() {
    const video = this.videoPlayer.nativeElement as HTMLVideoElement;
    if (video) {
      video.pause();
      this.videoIsPlaying = false; // Aggiungi questa riga per reimpostare lo stato di riproduzione
    }
  }
}
