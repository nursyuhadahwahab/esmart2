import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IframeUrlService {
  urlList = {
    abf: [
      { page: 'ahi', path: 'http://playground.petronas.com/dashboard/PERFECT4PRPC?tab=37775&token=B267B6AD53066E0E8262BE224626F15F&preview=true' },
      { page: 'path', path: 'http://playground.petronas.com/dashboard/PERFECT4PRPC?tab=37776&token=B267B6AD53066E0E8262BE224626F15F&preview=true' },
      { page: 'perfect', path: 'http://playground.petronas.com/dashboard/PERFECT4PRPC?tab=37777&token=B267B6AD53066E0E8262BE224626F15F&preview=true' },
      { page: 'summary', path: 'http://playground.petronas.com/dashboard/PERFECT4PRPC?tab=37778&token=B267B6AD53066E0E8262BE224626F15F&preview=true' }
    ],
    pgb: [
      { page: 'ahi', path: 'http://playground.petronas.com/dashboard/PERFECT4PGB?tab=37642&token=679E92B78EA2779EC41869B9DC430A80&preview=true' },
      { page: 'path', path: 'http://playground.petronas.com/dashboard/PERFECT4PGB?tab=37643&token=679E92B78EA2779EC41869B9DC430A80&preview=true' },
      { page: 'perfect', path: 'http://playground.petronas.com/dashboard/PERFECT4PGB?tab=37644&token=679E92B78EA2779EC41869B9DC430A80&preview=true' },
      { page: 'summary', path: 'http://playground.petronas.com/dashboard/PERFECT4PGB?tab=37645&token=679E92B78EA2779EC41869B9DC430A80&preview=true' }
    ]
  }

  private urlSource = new BehaviorSubject('');
  currentURL = this.urlSource.asObservable();
  private activeRegion = new BehaviorSubject('');
  currentRegion = this.activeRegion.asObservable();

  constructor() { }

  setURL(region: any, page: string) {
    const url = this.urlList[region].filter((data) => {
      return data.page === page
    })[0].path
  }
}
