import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrCityComponent } from './cr-city.component';

describe('CrCityComponent', () => {
  let component: CrCityComponent;
  let fixture: ComponentFixture<CrCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
