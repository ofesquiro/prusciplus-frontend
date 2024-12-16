import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FilmContentComponent } from './film-content.component';
import { PrusciPlusService } from '../PrusciPlus.Service';

describe('FilmContentComponent', () => {
  let component: FilmContentComponent;
  let fixture: ComponentFixture<FilmContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Import HttpClientTestingModule
        FilmContentComponent // Import the component instead of declaring it
      ],
      providers: [
        PrusciPlusService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Simulate the necessary route parameters
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});