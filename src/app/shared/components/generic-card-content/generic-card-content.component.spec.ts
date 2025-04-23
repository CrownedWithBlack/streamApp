import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardContentComponent } from './generic-card-content.component';

describe('GenericCardContentComponent', () => {
  let component: GenericCardContentComponent;
  let fixture: ComponentFixture<GenericCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericCardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
