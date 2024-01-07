import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgridComponent } from './ggrid.component';

describe('GgridComponent', () => {
  let component: GgridComponent;
  let fixture: ComponentFixture<GgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GgridComponent]
    });
    fixture = TestBed.createComponent(GgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
