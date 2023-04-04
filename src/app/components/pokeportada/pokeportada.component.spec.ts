import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeportadaComponent } from './pokeportada.component';

describe('PokeportadaComponent', () => {
  let component: PokeportadaComponent;
  let fixture: ComponentFixture<PokeportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeportadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
