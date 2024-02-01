import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder} from '@angular/forms';
import{ProduitsService} from '../produits.service';
import { Router } from 'express';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrl: './ajouter-produit.component.css'
})
export class AjouterProduitComponent implements OnInit{
  addProduit:any;
  constructor(private produit:ProduitsService,private fb:FormBuilder){}
message:boolean=false;
  ngOnInit(): void {
    this.addProduit=this.fb.group({
      nom:[""],
      prix:[""],
      image:[""]
    })
  }
  SaveData(){
    //console.log(this.addProduit.value);
    this.produit.SaveProduitData(this.addProduit.value).subscribe((result)=>{
      //console.log(result);
      this.message=true;
      this.addProduit.reset({});
    });
  }
  removeMessage(){
    this.message=false;
  }
 

}
