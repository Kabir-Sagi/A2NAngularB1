import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyclassComponent } from './propertyclass.component';

describe('PropertyclassComponent', () => {
  let component: PropertyclassComponent;
  let fixture: ComponentFixture<PropertyclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
