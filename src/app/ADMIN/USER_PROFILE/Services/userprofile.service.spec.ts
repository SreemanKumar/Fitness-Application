import { TestBed } from '@angular/core/testing';
import { UserProfileService } from './userprofile.service';

//import { UserprofileService } from './userprofile.service';

describe('UserprofileService', () => {
    let service: UserProfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserProfileService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
