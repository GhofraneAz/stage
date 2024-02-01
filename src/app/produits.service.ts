import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private url = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  getAllProduits() {
    return this.http.get(this.url);
  }

  SaveProduitData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  deleteProduit(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getProduitById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateProduitData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getProduits(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
}
