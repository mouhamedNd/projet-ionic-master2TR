import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilClientPage } from './profil-client.page';

describe('ProfilClientPage', () => {
  let component: ProfilClientPage;
  let fixture: ComponentFixture<ProfilClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
