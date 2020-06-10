import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFMComponent } from './private-fm.component';

describe('PrivateFMComponent', () => {
  let component: PrivateFMComponent;
  let fixture: ComponentFixture<PrivateFMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateFMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateFMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
