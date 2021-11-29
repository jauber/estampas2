import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraArquivoComponent } from './figura-arquivo.component';

describe('FiguraArquivoComponent', () => {
  let component: FiguraArquivoComponent;
  let fixture: ComponentFixture<FiguraArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguraArquivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguraArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
