import { Component, Input, Output, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'carousel',
  providers: [
  ],
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  @Input() public autoSwitch: boolean;   // 是否自动循环播放
  public curIndex = 0;  // 轮播图当前下标

  public imgArrs = [
    {src: 'assets/img/carousel_1.jpg',
     active: true, preActive: false, nextActive: false, hide: false},
    {src: 'assets/img/carousel_2.jpg',
     active: false, preActive: false, nextActive: true, hide: false},
    {src: 'assets/img/carousel_3.jpg',
    active: false, preActive: true, nextActive: false, hide: false},
    {src: 'assets/img/carousel_4.jpg',
    active: false, preActive: true, nextActive: false, hide: false},
    {src: 'assets/img/carousel_5.jpg',
    active: false, preActive: true, nextActive: false, hide: false},
    {src: 'assets/img/carousel_6.jpg',
    active: false, preActive: true, nextActive: false, hide: false},
    {src: 'assets/img/carousel_7.jpg',
    active: false, preActive: true, nextActive: false, hide: false}
  ];

  constructor() {}

  public switchImg( item, $index ) {
    this.curIndex = $index;
    // 将所有的状态置为初始状态
    for ( let items of this.imgArrs ) {
      items.active = false;
      items.nextActive = false;
      items.preActive = false;
      items.hide = true;
    }

    item.active = true;
    item.nextActive = false;
    item.preActive = false;
    item.hide = false;

    let preIndex = $index === 0 ? this.imgArrs.length - 1 : $index - 1;
    this.imgArrs[preIndex].active = false;
    this.imgArrs[preIndex].preActive = true;
    this.imgArrs[preIndex].nextActive = false;
    this.imgArrs[preIndex].hide = false;

    let nextIndex = $index === this.imgArrs.length - 1 ? 0 : $index + 1;
    this.imgArrs[nextIndex].active = false;
    this.imgArrs[nextIndex].preActive = false;
    this.imgArrs[nextIndex].nextActive = true;
    this.imgArrs[nextIndex].hide = false;
  }

  // 轮播图自动切换
  public autoSwitchImg() {
    let self = this;
    return function auto() {
      self.switchImg( self.imgArrs[self.curIndex], self.curIndex );
      self.curIndex = self.curIndex + 1 === self.imgArrs.length ? 0 : self.curIndex + 1;
      setTimeout( () => {
        auto();
      }, 4000 );
    };
  }

  public ngOnInit() {
    if ( this.autoSwitch === true ) {
      let auto = this.autoSwitchImg();
      auto();
    }
  }
}
