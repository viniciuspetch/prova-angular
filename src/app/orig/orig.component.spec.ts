import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrigComponent } from './orig.component';
import { AppModule } from '../app.module'

describe('OrigComponent', () => {
  let component: OrigComponent;
  let fixture: ComponentFixture<OrigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
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
