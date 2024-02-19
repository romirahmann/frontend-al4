import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGroupComponent } from './dashboard-group.component';

describe('DashboardGroupComponent', () => {
  let component: DashboardGroupComponent;
  let fixture: ComponentFixture<DashboardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
