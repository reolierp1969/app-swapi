import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesespacialesComponent } from './navesespaciales.component';

describe('NavesespacialesComponent', () => {
  let component: NavesespacialesComponent;
  let fixture: ComponentFixture<NavesespacialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesespacialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesespacialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
