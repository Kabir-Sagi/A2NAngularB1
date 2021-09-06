import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvendatabindingComponent } from './evendatabinding.component';

describe('EvendatabindingComponent', () => {
  let component: EvendatabindingComponent;
  let fixture: ComponentFixture<EvendatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvendatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvendatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
