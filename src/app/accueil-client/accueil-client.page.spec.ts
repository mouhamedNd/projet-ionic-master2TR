import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilClientPage } from './accueil-client.page';

describe('AccueilClientPage', () => {
  let component: AccueilClientPage;
  let fixture: ComponentFixture<AccueilClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
