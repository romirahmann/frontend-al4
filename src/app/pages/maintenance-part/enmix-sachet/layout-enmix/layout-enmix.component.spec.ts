import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEnmixComponent } from './layout-enmix.component';

describe('LayoutEnmixComponent', () => {
  let component: LayoutEnmixComponent;
  let fixture: ComponentFixture<LayoutEnmixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEnmixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEnmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
