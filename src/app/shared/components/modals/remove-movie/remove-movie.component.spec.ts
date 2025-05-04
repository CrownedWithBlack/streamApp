import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveMovieComponent } from './remove-movie.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('RemoveMovieComponent', () => {
  let component: RemoveMovieComponent;
  let fixture: ComponentFixture<RemoveMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveMovieComponent],
      providers: [NgbActiveModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
