import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
    let component: SignUpFormComponent;
    let fixture: ComponentFixture<SignUpFormComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SignUpFormComponent,HttpClientTestingModule], // Importa el componente aquí
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(SignUpFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

});
