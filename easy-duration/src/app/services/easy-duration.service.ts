import {Injectable} from '@angular/core';
import {EasyDuration} from "../models/easy-duration.model";
import {EasyDurationTypes} from "../enums/easy-duration-types.enum";

@Injectable({
  providedIn: 'root'
})
export class EasyDurationService {

  secondsMatcher = /([0-9]*)s/;
  minutesMatcher = /([0-9]*)m/;
  hoursMatcher = /([0-9]*)h/;
  daysMatcher = /([0-9]*)d/;
  monthsMatcher = /([0-9]*)M/;
  yearsMatcher = /([0-9]*)Y/;

  matcherArray = [
    this.yearsMatcher,
    this.monthsMatcher,
    this.daysMatcher,
    this.hoursMatcher,
    this.minutesMatcher,
    this.secondsMatcher
  ]

  resultIndex = 1;

  keys = {
    years: 'Y',
    months: 'M',
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
  }

  arrayOfKeyValues = Object.values(this.keys);
  arrayOfKeys: string[] = Object.keys(this.keys);

  constructor() { }

  public getDisplayDate(value: string | EasyDuration, type: EasyDurationTypes): string {
    return type === EasyDurationTypes.Iso ? this.getDisplayDateFromISO(value as string) : this.getDisplayDateFromObject(value as EasyDuration);
  }

  public getDataFromDisplayDate(value: string, type: EasyDurationTypes): string | EasyDuration {
    return type === EasyDurationTypes.Iso ? this.getISOFromDisplayDate(value) : this.getObjectFromDisplayDate(value);
  }

  private getDisplayDateFromISO(value: string): string {
    let displayValue = '';
    for (let i = 0; i < this.matcherArray.length; i++) {
      const match = value.match(this.matcherArray[i]);
      if (match) {
        displayValue = displayValue.concat(`${match[this.resultIndex]}${this.arrayOfKeyValues[i]}`);
      }
    }
    return displayValue;
  }

  private getDisplayDateFromObject(value: EasyDuration): string {
    let displayValue = '';
    Object.keys(this.keys).forEach(x => {
      if ((value as any)[x]) {
        displayValue = displayValue.concat(`${(value as any)[x]}${(this.keys as any)[x]}`)
      }
    });
    return displayValue;
  }

  private getISOFromDisplayDate(value: string): string {
    let isoValue = '';
    for (let i = 0; i < this.matcherArray.length; i++) {
      const match = value.match(this.matcherArray[i]);
      if (match) {
        isoValue = isoValue.concat(`${match[this.resultIndex]}${this.arrayOfKeyValues[i]}`);
      }
    }
    return isoValue;
  }


  private getObjectFromDisplayDate(value: string): EasyDuration {
    const duration: EasyDuration = { };
    for (let i = 0; i < this.matcherArray.length; i++) {
      const match = value.match(this.matcherArray[i]);
      if (match) {
        // @ts-ignore
        duration[this.arrayOfKeys[i]] = +match[this.resultIndex];
      }
    }
    return duration;
  }

}
