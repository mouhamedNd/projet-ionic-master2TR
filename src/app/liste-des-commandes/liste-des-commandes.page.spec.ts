import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeDesCommandesPage } from './liste-des-commandes.page';

describe('ListeDesCommandesPage', () => {
  let component: ListeDesCommandesPage;
  let fixture: ComponentFixture<ListeDesCommandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesCommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeDesCommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
