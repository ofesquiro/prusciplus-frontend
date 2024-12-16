import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ErrorPageComponent // Importa el componente en lugar de declararlo
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ errorCode: '404' }), // Simula los parámetros de la ruta necesarios
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});