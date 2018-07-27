import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ],
  declarations: [CandidateDetailComponent, CandidateListComponent, CandidateFormComponent]
})
export class CandidatesModule { }
