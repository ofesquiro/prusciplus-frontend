import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AddFilmFormComponent } from './add-film-form.component';
import { PrusciPlusService } from '../PrusciPlus.Service';

describe('AddFilmFormComponent', () => {
  let component: AddFilmFormComponent;
  let fixture: ComponentFixture<AddFilmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AddFilmFormComponent // Importa el componente en lugar de declararlo
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
    fixture = TestBed.createComponent(AddFilmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});