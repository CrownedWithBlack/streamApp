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
});
