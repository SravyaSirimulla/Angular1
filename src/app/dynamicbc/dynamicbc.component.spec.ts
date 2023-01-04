import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicbcComponent } from './dynamicbc.component';

describe('DynamicbcComponent', () => {
  let component: DynamicbcComponent;
  let fixture: ComponentFixture<DynamicbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
