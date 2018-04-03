import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import {
  Observable,
} from 'rxjs/Observable';

import * as _ from 'lodash';

import {
  DemoModel,
} from './demo.model';

@Injectable()
export class DemoService {
  public data: Array<DemoModel> = [];

  private baseUrl: string = 'http://localhost:4200/assets/mocked-data/company.json';

  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<Array<DemoModel>> {
    return Observable.create(obs => {
      if (this.data.length) {
        obs.next(this.data);
        obs.complete();
      } else {
        this.http.get(this.baseUrl)
        .subscribe((data: Array<DemoModel>) => {
          this.data = data;
          obs.next(this.data);
          obs.complete();
        });
      }
      
    });
    // return this.http.get<Array<DemoModel>>(this.baseUrl);
  }

  public getDatum(id: string): Observable<DemoModel> {
    return Observable.create(obs => {
      const datum = this.data.find((d: DemoModel) => d.id === id);
      obs.next(datum);
      obs.complete();
    });
  }

  public update(updatedDatum: DemoModel): Observable<DemoModel> {
    return Observable.create(obs => {
      this.data.forEach((d: DemoModel) => {
        if (d.id === updatedDatum.id) {
          d = updatedDatum;
          return;
        }
      });
      obs.next(updatedDatum);
      obs.complete();
    });
  }

  public delete(id: string): Observable<boolean> {
    return Observable.create(obs => {
      this.data = this.data.filter((d: DemoModel) => {
        return d.id !== id;
      });
      obs.next(true);
      obs.complete();
    });
  }

}
