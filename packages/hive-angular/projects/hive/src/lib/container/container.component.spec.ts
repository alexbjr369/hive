import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HvContainer } from './container.component';

describe('HvContainer', () => {
  let component: HvContainer;
  let fixture: ComponentFixture<HvContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HvContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HvContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
