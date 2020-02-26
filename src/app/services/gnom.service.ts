import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gnoms } from '../interfaces/gnom.interface';

@Injectable({
  providedIn: 'root'
})
export class GnomService {
  private gnomSubject = new Subject<Gnoms>();

  sendGnom(gnom: Gnoms) {
    this.gnomSubject.next(gnom);
  }

  clearGnom() {
    this.gnomSubject.next();
  }

  getGnom(): Observable<Gnoms> {
    return this.gnomSubject.asObservable();
  }

  constructor() { }
}
