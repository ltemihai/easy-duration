import {Component, Input, OnInit} from '@angular/core';
import {EasyDurationService} from "../services/easy-duration.service";
import {EasyDurationTypes} from "../enums/easy-duration-types.enum";
import {EasyDuration} from "../models/easy-duration.model";

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: EasyDurationTypes = EasyDurationTypes.Iso;
  @Input() theme = 'material';
  @Input() value: string | EasyDuration = '';

  displayValue = '';
  hasError = false;

  constructor(private easyDurationService: EasyDurationService) { }

  ngOnInit(): void {
    this.displayValue = this.easyDurationService.getDisplayDate(this.value, this.type);
  }

  valueChanged(data: any) {
    if (!this.easyDurationService.isInputValid(data.value)) { this.hasError = true; return; }
    this.value = this.easyDurationService.getDataFromDisplayDate(data.value, this.type);
    this.displayValue = this.easyDurationService.getDisplayDate(this.value, this.type);
    data.value = this.displayValue;
    this.hasError = false;
  }

}



