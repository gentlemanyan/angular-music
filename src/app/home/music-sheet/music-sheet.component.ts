import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-sheet',
  styleUrls: ['./music-sheet.component.scss'],
  templateUrl: './music-sheet.component.html'
})

export class MusicSheetComponent implements OnInit {
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
    ],
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
    ],
  ];

  public musicClassItemArr = [
    { class: '华语' },
    { class: '流行' },
    { class: '摇滚' },
    { class: '民谣' },
    { class: '电子' },
    { class: '轻音乐' },
    { class: '影视原声' },
    { class: 'ACG' },
    { class: '怀旧' },
    { class: '治愈' },
  ];

  constructor() {}

  public ngOnInit() {}
}
