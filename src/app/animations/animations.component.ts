import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'darkseagreen',
          border: '1px solid green',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          backgroundColor: 'bisque',
        })
      ),
      transition('open => closed', [animate('1s 100ms ease-in')]),
      transition('closed => open', [animate('0.5s')]),
      transition('open => *', [animate('2s')]), // * --------> refers to wildcard state
      transition('open <=> closed', [animate('3s')]), // bidirectional
      // transition('* => open', [animate('4s', style({ opacity: '*' }))]),//????
    ]),
    
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100px)' }),
        animate('1s'),
      ]),
      transition('* => void', [
        style({ transform: 'translateX(-100px )' }),
        animate('1s'),
      ]),
    ]),

    //aliases..........................................................................

    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100px)' }),
        animate('1s'),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(-100px )' }),
        animate('1s'),
      ]),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  constructor() {}
  isOpen: boolean = true;
  show: boolean = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  addRemoveToggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {}
}
