import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent,
    ModifierProduitComponent,
    GestionProduitComponent,
    LoginComponent,
  
    RegistrationComponent,
        AcceuilComponent,
        AproposComponent,
        FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
