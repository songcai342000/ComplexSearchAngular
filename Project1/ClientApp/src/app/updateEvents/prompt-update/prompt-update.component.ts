import { Component, OnInit } from '@angular/core';
import { CheckForUpdateService } from '../../Services/check-for-update.service';
import { PromptUpdateService } from '../../Services/prompt-update.service';

@Component({
  selector: 'app-prompt-update',
  templateUrl: './prompt-update.component.html',
  styleUrls: ['./prompt-update.component.css']
})
export class PromptUpdateComponent implements OnInit {
  constructor(private checkforupdateService: CheckForUpdateService) { }

  ngOnInit(): void {
    this.checkforupdateService;
  }

}
