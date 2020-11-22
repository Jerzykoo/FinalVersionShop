import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  collectionName = 'basket';
  constructor(private readonly db: AngularFirestore) { }

  getItems(): Observable<any>{
    return this.db.collection(this.collectionName).snapshotChanges()
    .pipe(
        map( (data: DocumentChangeAction<any>[]) => {
          const ret: any[] = [];
          for(const itemDoc of data){
            const item = {
              ...itemDoc.payload.doc.data(),
              id: itemDoc.payload.doc.id
            }
            ret.push(item);
          }
          return ret;
        // data.payload.doc.data
          })
    );
  }

  addItem(newItem): void{
    this.db.collection(this.collectionName).add(newItem);
  }

  removeItem(itemId): void{
    this.db.doc(this.collectionName + '/' + itemId).delete();
  }


  updateItem(item, id): void{
    this.db.doc(this.collectionName + '/' + id).update(item);
  }
}
