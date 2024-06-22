import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

import { register } from 'swiper/element/bundle';


// Swiper
register();

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageModule {}
