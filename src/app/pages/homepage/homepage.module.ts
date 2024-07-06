import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

import { register } from 'swiper/element/bundle';
import { RentFormComponent } from './components/rent-form/rent-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperDirective } from 'src/app/directives/swiper.directive';

// Swiper
register();

@NgModule({
  declarations: [HomepageComponent, RentFormComponent, SwiperDirective],
  imports: [CommonModule, ReactiveFormsModule, HomepageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageModule {}
