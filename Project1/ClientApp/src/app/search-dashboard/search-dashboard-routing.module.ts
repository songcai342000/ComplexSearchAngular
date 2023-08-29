import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchDashboardComponent } from './search-dashboard.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: SearchDashboardComponent }
];

@NgModule({
  //declarations: [SearchDashboardComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule]
})
export class SearchDashboardRoutingModule { }
