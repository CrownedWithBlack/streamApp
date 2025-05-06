import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreModalComponent } from './view-more-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ViewMoreModalComponent', () => {
  let component: ViewMoreModalComponent;
  let fixture: ComponentFixture<ViewMoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoreModalComponent],
      providers: [NgbActiveModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostar un alert #watchMovie', () => {
    const alertSpy = spyOn(window, 'alert');//creamos un espia en el alert
    component.watchMovie();
    expect(window.alert).toHaveBeenCalled();//checamos si el alert fue llamado
  });

  it('deberia cerrar el modal #closeModal', () => {
    const dismissModalSpy = spyOn(component['watchMovieModal'], 'dismiss');//creamos un espia de dismiss
    component.closeModal();
    expect(dismissModalSpy).toHaveBeenCalled();//comprobamos si la función fue llamada
  });
});
