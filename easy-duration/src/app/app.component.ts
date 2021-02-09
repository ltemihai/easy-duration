import { Component } from '@angular/core';
import {EasyDuration} from "./models/easy-duration.model";
import {EasyDurationTypes} from "./enums/easy-duration-types.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-duration';

  EasyDurationTypes = EasyDurationTypes;

  objectValue: EasyDuration = {
    years: 1,
    months: 2,
    days: 3,
    hours: 4,
    minutes: 5,
    seconds: 6
  }

  stringValue: string = '1Y2M3d4h5m6s';
}
