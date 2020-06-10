import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSelectComponent } from './tabs-select.component';

describe('TabsSelectComponent', () => {
  let component: TabsSelectComponent;
  let fixture: ComponentFixture<TabsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
