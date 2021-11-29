import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraPastaComponent } from './figura-pasta.component';

describe('FiguraPastaComponent', () => {
  let component: FiguraPastaComponent;
  let fixture: ComponentFixture<FiguraPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguraPastaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguraPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
