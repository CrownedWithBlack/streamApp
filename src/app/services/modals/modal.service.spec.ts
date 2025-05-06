import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreModalComponent } from '../../shared/components/modals/view-more-modal/view-more-modal.component';

describe('ModalService', () => {
  let service: ModalService;
  let modalServiceSpy: jasmine.SpyObj<NgbModal> //declaramos un objecto espia de tipo modal

  beforeEach(() => {
    modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']); //le asignamos el valor, en este caso "espiará" a metodo open

    TestBed.configureTestingModule({
      providers: [
        ModalService,
        {provide: NgbModal, useValue: modalServiceSpy} //le decimos a NgbModal que use nuestro modalService espía
      ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia mostar el modal "ver" #watchModal', () => {
    const title = 'titulo';
    const movieId = 1;
    const review = 'review';
    const mockModalRef = {//creamos un mock de la estrcutura interna del modal
      componentInstance: {
        title: '',
        body: ''
      }
    };

    modalServiceSpy.open.and.returnValue(mockModalRef as any);//le decimos al espia que cuando llamen a open lo "fuerce" a devolver mockmodalRef

    service.watchModal(title, movieId, review);//llamamos a la funcion real
    expect(modalServiceSpy['open']).toHaveBeenCalledWith(ViewMoreModalComponent);//checamos si la funcion fue llamada con el parametro correcto
    const modal = modalServiceSpy.open.calls.mostRecent().returnValue;//traemos al modal que acabamos de llamar

    expect(modal.componentInstance.title).toBe(title);//checamos si la asignación de valores fue exitosa
    expect(modal.componentInstance.body).toBe(review);
    
    
  });

  it('deberia  mostrar el modal #hideModal', async () => {
    const title = 'titulo';
    const movieId = 1;
    const callbackSpy = jasmine.createSpy('callback'); //creamos un espia del callback
  
    //creamos un mock del modal con su estrcutura
    const mockModalRef = {
      componentInstance: { title: '', body: '' }, //elementos del modal
      result: Promise.resolve('confirm') //respuesta del modal
    };
    modalServiceSpy.open.and.returnValue(mockModalRef as any);//le decimos al espia que nos vuelva el modal mockeado
  
    //llamamos al modal desde el servicio original
    await service.hideModal(title, movieId, callbackSpy);
  
    //checamos si el servicio fue llamado
    expect(modalServiceSpy.open).toHaveBeenCalled();
  
    //checa si el callback fue llamado
    expect(callbackSpy).toHaveBeenCalled();
  });
});
