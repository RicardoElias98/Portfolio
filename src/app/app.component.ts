import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "../components/card/card.component";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isHidden = false;

  ngAfterViewInit() {
    new Swiper('.swiper', {
      loop: false,
      loopAddBlankSlides: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 5,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }

  hideTopInfo() {
    this.isHidden = !this.isHidden;
  }
}
