import {
  Component,
  OnInit
} from '@angular/core';

// import { CarouselDirective } from './carousel.directive';

@Component({
  selector: 'recommend',
  providers: [
  ],
  styleUrls: [ './recommend.component.scss' ],
  templateUrl: './recommend.component.html'
})
export class RecommendComponent implements OnInit {
  public hotItemArr = [
    [
      {src: 'assets/img/carousel_1.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_2.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_3.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_4.jpg', content: '测试，这是一个热门推荐'}
    ],
    [
      {src: 'assets/img/carousel_4.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_5.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_6.jpg', content: '测试，这是一个热门推荐'},
      {src: 'assets/img/carousel_7.jpg', content: '测试，这是一个热门推荐'}
    ]
  ];
  public localState = { value: '' };
  public color = '#F00';
  /**
   * TypeScript public modifiers
   */
  constructor(
    // public appState: AppStae,
    // public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `recommend` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
