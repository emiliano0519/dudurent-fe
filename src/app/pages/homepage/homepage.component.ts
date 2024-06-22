import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Card } from '../../models/card.model';

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

  contents: Card[] = [
    {
      title: 'Battlefield 2042',
      status: 'Disponibile Ora',
      description:
        "Battlefield™ 2042 segna il ritorno dell'iconica guerra totale della serie. Forma una squadra e porta con te un arsenale all'avanguardia in campi di battaglia su vasta scala, in un mondo trasformato dal caos nel prossimo futuro.",
      url: 'assets/images/games/BAT001.png',
      logo: 'assets/images/games/BAT001_Logo.png',
    },
    {
      title: 'Diablo IV',
      status: 'Disponibile Ora',
      description:
        "Unisciti alla lotta per Sanctuarium, l'avventura GdR d'azione definitiva. Prova la campagna e i nuovi contenuti stagionali",
      url: 'assets/images/games/DB001.png',
      logo: 'assets/images/games/DB001_Logo.png',
    },
    {
      title: 'Donkey Kong Country Returns',
      status: 'Disponibile Ora',
      description:
        'Donkey Kong Country Returns è un videogioco per Wii sviluppato da Retro Studios, uscito nel 2010. È il quarto capitolo della serie Donkey Kong Country, con protagonisti Donkey Kong e Diddy Kong. Il videogioco è stato riconvertito anche per Nintendo 3DS.',
      url: 'assets/images/games/DK001.png',
      logo: 'assets/images/games/DK001_Logo.png',
    },
    {
      title: 'HellDivers 2',
      status: 'Disponibile Ora',

      description: 'L \' ultima linea di attacco della galassia. Unisciti agli Helldiver per combattere in nome della libertà in una galassia ostile in questo frenetico e feroce sparatutto in terza persona.',
      url: 'assets/images/games/HLD2_002.jpg',
      logo: 'assets/images/games/HLD2_Logo.png',
    },
    {
      title: 'Metro Last Light',
      status: 'Disponibile Ora',
      description: 'L\'anno è il 2034. Sotto le rovine della Mosca post-apocalittica, nei tunnel della metropolitana, i sopravvissuti dell\'umanità sono assediati da minacce mortali provenienti dall\'esterno e dall\'interno.',
      url: 'assets/images/games/MTL001.jpg',
      logo: 'assets/images/games/Metro_Logo.png',
    },
    {
      title: 'Fallout 76',
      status: 'Disponibile Ora',
      description: 'Bethesda Game Studios, acclamato creatore di Skyrim e Fallout 4, ti dà il benvenuto nel mondo di Fallout 76. Venticinque anni dopo la caduta delle bombe, insieme agli altri abitanti del Vault (scelti tra i migliori della nazione), riemergi finalmente nell’America post-nucleare nella Giornata della Rigenerazione nel 2102.',
      url: 'assets/images/games/FL76_01.JPEG',
      logo: 'assets/images/games/FL76_Logo.png',
    },
  ];

  gameList: any[] = [
    {
      name: 'Helldivers 2',
      price: '10$',
      sale: '-10%',
      image: 'assets/images/games/HLD2.jpg',
      video: 'assets/videos/games/HLD2_trailer.webm',
    },
    {
      name: 'War Thunder',
      price: 'FREE',
      sale: '',
      image: 'assets/images/games/WT001.jpg',
      video: 'assets/videos/games/WT_trailer.mp4',
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
