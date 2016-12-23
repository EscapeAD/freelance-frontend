import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentsService } from './documents.service';

@Component({
moduleId: module.id,
selector: 'documents',
templateUrl: 'documents.component.html',
styleUrls: ['documents.component.css'],
providers: [ DocumentsService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = 'Docs Page'
  documents: Document[] = [];
  errorMessage: string;

  constructor(
    private documentsService: DocumentsService
  ){}

  ngOnInit(){
    // let timer = Observable.timer(0, 5000);
    // timer.subscribe(() => this.getDocuments())
    // temp data currently dynamic picture issue
    this.getDocuments();

  }
  getDocuments(){
    this.documentsService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          errors => this.errorMessage = <any>error
        )
  }

}
