import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartidosFutPage } from './partidos-fut.page';

describe('PartidosFutPage', () => {
  let component: PartidosFutPage;
  let fixture: ComponentFixture<PartidosFutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartidosFutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
