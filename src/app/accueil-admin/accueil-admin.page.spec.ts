import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilAdminPage } from './accueil-admin.page';

describe('AccueilAdminPage', () => {
  let component: AccueilAdminPage;
  let fixture: ComponentFixture<AccueilAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
