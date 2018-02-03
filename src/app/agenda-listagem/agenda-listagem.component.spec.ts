import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaListagemComponent } from './agenda-listagem.component';

describe('AgendaListagemComponent', () => {
  let component: AgendaListagemComponent;
  let fixture: ComponentFixture<AgendaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
