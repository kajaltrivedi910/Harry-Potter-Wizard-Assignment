import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirFilterComponent } from './elixir-filter.component';

describe('ElixirFilterComponent', () => {
  let component: ElixirFilterComponent;
  let fixture: ComponentFixture<ElixirFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElixirFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElixirFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
