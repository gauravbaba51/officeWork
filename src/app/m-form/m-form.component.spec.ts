import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFormComponent } from './m-form.component';

describe('MFormComponent', () => {
  let component: MFormComponent;
  let fixture: ComponentFixture<MFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
