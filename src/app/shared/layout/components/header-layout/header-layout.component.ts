import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {

  constructor() { }

  isModalOpen: boolean = false;


  ngOnInit(): void {
  }
  
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal(event: Event): void {
    if ((event.target as Element).classList.contains('modal')) {
      this.isModalOpen = false;
    }
  }

}
