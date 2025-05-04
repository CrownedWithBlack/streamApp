import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerosComponent } from './generos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenerosComponent', () => {
  let component: GenerosComponent;
  let fixture: ComponentFixture<GenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerosComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
