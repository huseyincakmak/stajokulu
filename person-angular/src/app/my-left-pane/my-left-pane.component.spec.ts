import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeftPaneComponent } from './my-left-pane.component';

describe('MyLeftPaneComponent', () => {
  let component: MyLeftPaneComponent;
  let fixture: ComponentFixture<MyLeftPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLeftPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLeftPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
