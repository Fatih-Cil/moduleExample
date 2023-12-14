import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersecondpageComponent } from './usersecondpage.component';

describe('UsersecondpageComponent', () => {
  let component: UsersecondpageComponent;
  let fixture: ComponentFixture<UsersecondpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersecondpageComponent]
    });
    fixture = TestBed.createComponent(UsersecondpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
