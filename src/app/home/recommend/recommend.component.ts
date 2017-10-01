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

  public recomendArr = [
    [
      {src: 'assets/img/carousel_1.jpg', firstTitle: '每日歌曲推荐',
      secondTile: '根据你的口味生成，每日更新', isPadding: false},
      {src: 'assets/img/carousel_2.jpg', firstTitle: '周杰伦新专辑',
       secondTile: '周杰伦的床边故事', isPadding: true},
    ],
    [
      {
        src: 'assets/img/carousel_3.jpg',
        firstTitle: '陈奕迅新歌，快来买啊',
        secondTile: '根据你的口味生成，每日更新',
        isPadding: false
      },
      {
        src: 'assets/img/carousel_4.jpg',
        firstTitle: '瑶宝宝的新歌，求粉',
        secondTile: '哈哈哈，瑶宝宝发新歌了',
        isPadding: true
      },
    ]
  ];

  public songArr = [
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
    {rank: '01', songName: '夜的第七章', author: '周杰伦，张言'},
  ];

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
