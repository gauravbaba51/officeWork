import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCityComponent } from './creat-city.component';

describe('CreatCityComponent', () => {
  let component: CreatCityComponent;
  let fixture: ComponentFixture<CreatCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
