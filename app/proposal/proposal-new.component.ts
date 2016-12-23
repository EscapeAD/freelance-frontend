import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { FormsModule } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
})
export class ProposalNewComponent {
  proposal = new Proposal;
}
