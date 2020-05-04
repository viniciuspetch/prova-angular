import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigComponent } from './orig.component';

describe('OrigComponent', () => {
  let component: OrigComponent;
  let fixture: ComponentFixture<OrigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
