import { Component, OnInit } from '@angular/core';
import{ProduitsService} from '../produits.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrl: './gestion-produit.component.css'
})
export class GestionProduitComponent implements OnInit {
  constructor(private produit:ProduitsService){ }
  produitData:any=[];
  ngOnInit(): void {
    this.produit.getAllProduits().subscribe((AllData)=>{
      console.log(AllData);
      this.produitData=AllData;
    })
  }
  deleteProduit(Produit_id:any){
    console.log(Produit_id);
    this.produit.deleteProduit(Produit_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
    });

  }


}
