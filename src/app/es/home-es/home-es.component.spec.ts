import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeESComponent } from './home-es.component';

describe('HomeESComponent', () => {
  let component: HomeESComponent;
  let fixture: ComponentFixture<HomeESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeESComponent]
    });
    fixture = TestBed.createComponent(HomeESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
