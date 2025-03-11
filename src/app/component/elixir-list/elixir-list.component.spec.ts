import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirListComponent } from './elixir-list.component';

describe('ElixirListComponent', () => {
  let component: ElixirListComponent;
  let fixture: ComponentFixture<ElixirListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElixirListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElixirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
