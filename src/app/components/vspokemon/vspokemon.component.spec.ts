import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VspokemonComponent } from './vspokemon.component';

describe('VspokemonComponent', () => {
  let component: VspokemonComponent;
  let fixture: ComponentFixture<VspokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VspokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VspokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
