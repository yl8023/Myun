import { trigger, transition, animate, style, query, animateChild, group, state } from '@angular/animations';
export const toMusicInfoAnimation =
  trigger('musicAnimation', [
    state('open', style({
      opacity: 1,
      display: 'block',
      zIndex: 100,
    })),
    state('closed', style({
      height: '64px',
      width: '200px',
      opacity: 0,
      top: '90%',
      zIndex: -100,
      
    })),
    transition('* => closed', [
      animate('300ms linear')
    ]),
    transition('* => open', [
      animate('300ms linear')
    ]),
  ]);