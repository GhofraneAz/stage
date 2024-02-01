import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path:'ajouterproduit',component:AjouterProduitComponent
  },
  {
    path:'gestionproduit',component:GestionProduitComponent
  },
  {
    path:'modifierproduit/:id',component:ModifierProduitComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'acceuil',component:AcceuilComponent
  },
  {
    path:'apropos',component:AproposComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'registration',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
