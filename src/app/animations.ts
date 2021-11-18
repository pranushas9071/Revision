import {
  animate,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const reUsableAnimation = animation([
  style({
    backgroundColor: '{{backgroundColor}}',
    opacity: '{{opacity}}',
    height: '{{height}}',
  }),
  animate('{{time}}'),
]);

export const slideAnimations = trigger('routerAnimation', [
  transition('PipesPage <=> DirectivesPage', [
    // style({ position: 'relative' }),
    query(':enter,:leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out'), style({ left: '0%' })]),
    ]),
  ]),
]);
