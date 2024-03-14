import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENMIXSACHETComponent } from './enmix-sachet.component';

describe('ENMIXSACHETComponent', () => {
  let component: ENMIXSACHETComponent;
  let fixture: ComponentFixture<ENMIXSACHETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENMIXSACHETComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENMIXSACHETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
