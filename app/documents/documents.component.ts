import { Component } from '@angular/core';
import { Document } from './document';

@Component({
moduleId: module.id,
selector: 'documents',
templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = 'Docs Page'
  documents: Document[] = [
    {
      title: "This is a Test",
      description: "Test data",
      file_url: "www.google.com",
      updated_at: "01/01/1010",
      image_url: "www.google.com"
    },
    {
      title: "DOc 2",
      description: "Test data",
      file_url: "www.google.com",
      updated_at: "01/01/1010",
      image_url: "www.google.com"
    },
    {
      title: "Test Doc 3",
      description: "Test data",
      file_url: "www.google.com",
      updated_at: "01/01/1010",
      image_url: "www.google.com"
    }
  ]

}
