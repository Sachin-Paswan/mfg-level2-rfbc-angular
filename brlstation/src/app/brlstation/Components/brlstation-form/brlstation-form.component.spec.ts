import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrlstationFormComponent } from './brlstation-form.component';

describe('BrlstationFormComponent', () => {
  let component: BrlstationFormComponent;
  let fixture: ComponentFixture<BrlstationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrlstationFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BrlstationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
