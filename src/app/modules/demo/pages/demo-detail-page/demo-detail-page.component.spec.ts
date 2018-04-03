import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailPageComponent } from './demo-detail-page.component';

describe('DemoDetailPageComponent', () => {
  let component: DemoDetailPageComponent;
  let fixture: ComponentFixture<DemoDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
