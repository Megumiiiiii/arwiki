import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { arwikiVersion, arwikiAppVersion } from '../../core/arwiki';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent implements OnInit {
  loading = false;
  arwikiVersion = '';
  appVersion = '';

  constructor(private _location: Location) {

  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    this.arwikiVersion = arwikiVersion[0];
    this.appVersion = arwikiAppVersion;
  }
}
