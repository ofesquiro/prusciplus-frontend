import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FilmComponentComponent } from './film-component.component';
import { PrusciPlusService } from '../PrusciPlus.Service';

describe('FilmComponentComponent', () => {
  let component: FilmComponentComponent;
  let fixture: ComponentFixture<FilmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FilmComponentComponent // Importa el componente en lugar de declararlo
      ],
      providers: [
        PrusciPlusService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Simula los parámetros de ruta necesarios
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});