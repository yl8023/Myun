import { trigger, transition, animate, style, query, animateChild, group, state } from '@angular/animations';
export const toMusicInfoAnimation =
  trigger('musicAnimation', [
    state('open', style({
      width: '100%',
      height: 'calc(100% - 114px)',
      opacity: 1,
      top: '64px',
      zIndex: 10,
      left: 0,
      
      
    })),
    state('closed', style({
      width: '200px',
      height: '64px',
      opacity: 0.3,
      top: '90%',
      zIndex: -5,
      left: 0,
      
    })),
    transition('* => closed', [
      animate('500ms ease')
    ]),
    transition('* => open', [
      animate('500ms ease')
    ]),
  ]);