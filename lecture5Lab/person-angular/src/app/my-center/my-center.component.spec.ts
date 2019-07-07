import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCenterComponent } from './my-center.component';

describe('MyCenterComponent', () => {
  let component: MyCenterComponent;
  let fixture: ComponentFixture<MyCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
