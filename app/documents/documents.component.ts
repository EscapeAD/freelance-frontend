import { Component } from '@angular/core';
import { Document } from './document';

@Component({
moduleId: module.id,
selector: 'documents',
templateUrl: 'documents.component.html',
styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = 'Docs Page'
  documents: Document[] = [
    {
      title: "This is a Test",
      description: "Test data",
      file_url: "http://www.google.com",
      updated_at: "01/01/1010",
      image_url: "https://placekitten.com/g/300/200"
    },
    {
      title: "DOc 2",
      description: "Test data",
      file_url: "http://www.google.com",
      updated_at: "01/01/1010",
      image_url: "https://placekitten.com/g/300/200"
    },
    {
      title: "Test Doc 3",
      description: "Test data",
      file_url: "http://www.google.com",
      updated_at: "01/01/1010",
      image_url: "https://placekitten.com/g/300/200"
    }
  ]

}
