import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
    let service: AutenticacionService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AutenticacionService);
    });
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    // Add more tests...

    // sango
    // it('should return false when the user is not logged in', () => { 

});
