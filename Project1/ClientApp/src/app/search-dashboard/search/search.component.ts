import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchCondition } from '../../models/searchCondition';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCondition: SearchCondition | undefined;
  @Output() emitSearchCondition = new EventEmitter<FormGroup>();
  @ViewChild('checkCategories', { static: true }) checkCategoriesBox!: ElementRef;
  @ViewChild('music', { static: true }) musicBox!: ElementRef;
  @ViewChild('sport', { static: true }) sportBox!: ElementRef;
  @ViewChild('checkGroups', { static: true }) checkGroupsBox!: ElementRef;
  @ViewChild('female', { static: true }) femaleBox!: ElementRef;
  @ViewChild('male', { static: true }) maleBox!: ElementRef;


  searchForm = new FormGroup({
    searchTerm: new FormControl('', [Validators.required, Validators.minLength(4)]),
    music: new FormControl(''), 
    sport: new FormControl(''),
    checkCategories: new FormControl(''),
    female: new FormControl(''),
    male: new FormControl(''),
    checkGroups: new FormControl(''),
    period: new FormControl(''),
    termMatch: new FormControl('')
  });


  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => this.onSubmit());
  }


  onSubmit(): void {
    this.emitSearchCondition.emit(this.searchForm);
  }

  checkAllCategories(): void { //check both music and sport
    if (this.checkCategoriesBox.nativeElement.checked) {
      this.musicBox.nativeElement.checked = true;
      this.sportBox.nativeElement.checked = true;
    }
    else {
      this.musicBox.nativeElement.checked = false;
      this.sportBox.nativeElement.checked = false;
    }
  }

  checkAllGroups(): void { //check both female and male
    if (this.checkGroupsBox.nativeElement.checked) {
      this.femaleBox.nativeElement.checked = true;
      this.maleBox.nativeElement.checked = true;
    }
    else {
      this.femaleBox.nativeElement.checked = false;
      this.maleBox.nativeElement.checked = false;
    }
  }
}
