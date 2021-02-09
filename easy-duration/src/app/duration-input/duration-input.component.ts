import {Component, Input, OnInit} from '@angular/core';
import {EasyDuration} from "../models/easy-duration.model";
import {EasyDurationService} from "../services/easy-duration.service";
import {EasyDurationTypes} from "../enums/easy-duration-types.enum";

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string | EasyDuration = ''
  @Input() type: EasyDurationTypes = EasyDurationTypes.Iso

  displayValue = '';

  constructor(private easyDurationService: EasyDurationService) { }

  ngOnInit(): void {
    this.displayValue = this.easyDurationService.getDisplayDate(this.value, this.type);
  }

  valueChanged(data: any) {
    this.value = this.easyDurationService.getDataFromDisplayDate(data.value, this.type);
    this.displayValue = this.easyDurationService.getDisplayDate(this.value, this.type);
    data.value = this.displayValue;
  }

}



