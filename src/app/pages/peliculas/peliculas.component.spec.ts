import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculasComponent } from './peliculas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
