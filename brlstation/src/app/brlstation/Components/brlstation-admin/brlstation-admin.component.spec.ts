import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrlstationAdminComponent } from './brlstation-admin.component';

describe('BrlstationAdminComponent', () => {
  let component: BrlstationAdminComponent;
  let fixture: ComponentFixture<BrlstationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrlstationAdminComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BrlstationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
