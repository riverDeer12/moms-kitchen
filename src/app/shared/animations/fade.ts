import { animation, animate, style } from '@angular/animations';

export const FadeAnimation = animation([
  style({
    height: 0,
    opacity: 0,
    transform: 'scale(0.90)',
    'margin-bottom': 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  }),

  animate(
    '300ms',
    style({
      height: '*',
      'margin-bottom': 0,
      paddingTop: '*',
      paddingLeft: '*',
      paddingRight: '*',
      paddingBottom: '*',
    })
  ),
  animate(300),
]);
