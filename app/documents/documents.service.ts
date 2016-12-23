import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Document } from './document';

@Injectable()
export class DocumentsService {
  private documentsUrl = 'http://localhost:3001/freelance_documents.json'

  constructor(
    private http: Http
  ){}

  getDocuments(): Observable<Document[]>{
    return this.http.get(this.documentsUrl)
                    .map((response: Response) => <Document[]>response.json())
  }
}
