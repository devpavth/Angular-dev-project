import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelebrationsPage } from './celebrations.page';

describe('CelebrationsPage', () => {
  let component: CelebrationsPage;
  let fixture: ComponentFixture<CelebrationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
