import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchDashboardComponent } from './search-dashboard.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDashboardRoutingModule } from './search-dashboard-routing.module';

@NgModule({
  declarations: [
    SearchDashboardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchDashboardRoutingModule
  ]
})
export class SearchDashboardModule { }
