import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal( 15 , 'Test Compnary', 'http://www.itsadamtse.com', 'Ruby on Rails', 150, 210, 20, 'unknown91sadsadas1@gmail.com')
  proposalTwo: Proposal = new Proposal( 95 , 'Test Compnary', 'http://www.itsadamtse.com', 'Ruby on Rails', 150, 210, 20, 'unknown91sadsadas1@gmail.com')
  proposalThree: Proposal = new Proposal( 115 , 'Test Compnary', 'http://www.itsadamtse.com', 'Ruby on Rails', 150, 210, 20, 'unknown91sadsadas1@gmail.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
