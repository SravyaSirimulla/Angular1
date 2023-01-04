import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticbreadcrumbComponent } from './staticbreadcrumb.component';

describe('StaticbreadcrumbComponent', () => {
  let component: StaticbreadcrumbComponent;
  let fixture: ComponentFixture<StaticbreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticbreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
