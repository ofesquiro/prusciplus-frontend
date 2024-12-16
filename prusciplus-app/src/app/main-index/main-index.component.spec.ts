import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainIndexComponent } from './main-index.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('MainIndexComponent', () => {
  let component: MainIndexComponent;
  let fixture: ComponentFixture<MainIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIndexComponent,HttpClientTestingModule], // Importa el componente aquí
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
