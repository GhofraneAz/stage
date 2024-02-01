import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{ProduitsService} from '../produits.service';
import{ActivatedRoute} from '@angular/router';
import { Console } from 'console';
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrl: './modifier-produit.component.css'
})
export class ModifierProduitComponent implements OnInit {

  ProduitService: any;
  constructor(private produit:ProduitsService,private router:ActivatedRoute){}
  editProduit=new FormGroup({
    nom:new FormControl(''),
    prix:new FormControl(''),
    image:new FormControl(''),
});

message:boolean=false;

ngOnInit(): void {
  //console.log(this.router.snapshot.params['id']);
  this.produit.getProduitById(this.router.snapshot.params['id']).subscribe((result:any)=>{
    console.log(result);
    this.editProduit=new FormGroup({
      nom:new FormControl(result['nom']),
      prix:new FormControl(result['prix']),
      image:new FormControl(result['image']),
  });
  });
  
}
UpdateData(){

  this.produit.updateProduitData(this.router.snapshot.params['id'],this.editProduit.value).subscribe((result)=>{
    //console.log(result);
    this.message=true;
  });
 
}

removeMessage(){
  this.message=false;
}


}