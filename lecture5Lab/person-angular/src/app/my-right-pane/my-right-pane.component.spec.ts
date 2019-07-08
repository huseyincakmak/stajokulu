import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRightPaneComponent } from './my-right-pane.component';

describe('MyRightPaneComponent', () => {
  let component: MyRightPaneComponent;
  let fixture: ComponentFixture<MyRightPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRightPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRightPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
