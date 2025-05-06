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

  it('deberia cerrar el modal y manda el estado true #removeMovie', () => {
    const dismissModalSpy = spyOn(component['removeMovieModal'], 'close');//creamos un espia en close()
    component.removeMovie();
    expect(dismissModalSpy).toHaveBeenCalledWith(true);//checamos si la función fue llamada y mandó un true
  });


  it('deberia cerrar el modal #closeModal', () => {
    const dismissModalSpy = spyOn(component['removeMovieModal'], 'close');//creamos un espia en close()
    component.closeModal();
    expect(dismissModalSpy).toHaveBeenCalled();//checamos si la función fue llamada
  });
});
