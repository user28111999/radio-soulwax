import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Radio, ServerRadio } from '../models/radio.model';

@Injectable()
export class RadioProvider {

  constructor(
    private afs: AngularFirestore
  ) {}

  getAll$(): Observable<Radio[]> {
    return this.afs.collection<ServerRadio>('radios')
    .valueChanges()
    .pipe(
      map((sRadios: ServerRadio[]) => sRadios
        .map(sRadio => new Radio(sRadio))
        .sort((a: Radio, b: Radio) => a.name > b.name ? 1 : -1)
      )
    );
  }

  getAllByDate$(): Observable<Radio[]> {
    return this.afs.collection<ServerRadio>('radios', ref =>
      ref.orderBy('releaseDate')
    )
    .valueChanges()
    .pipe(
      map((sRadios: ServerRadio[]) => sRadios
        .map(sRadio => new Radio(sRadio))
      )
    );
  }

  getAllByPopularity$(): Observable<Radio[]> {
    return this.afs.collection<ServerRadio>('radios', ref =>
      ref.orderBy('popularity')
    )
    .valueChanges()
    .pipe(
      map((sRadios: ServerRadio[]) => sRadios
        .map(sRadio => new Radio(sRadio))
        .sort((a: Radio, b: Radio) => a.popularity > b.popularity ? 1 : -1)
      )
    );
  }

  get$(radioUid: string): Observable<Radio> {
    return this._getDoc(radioUid)
    .valueChanges()
    .pipe(
      map((sRadio: ServerRadio) => sRadio ? new Radio(sRadio) : null)
    );
  }

  private _getDoc(radioUid: string): AngularFirestoreDocument {
    return this.afs.doc(`radios/${radioUid}`);
  }
}
