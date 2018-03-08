import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  	mobileQuery: MediaQueryList;
  // fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);
	fillerNav: any = [{
		"name": "Home",
		"url": "/home",
		"className": "fa fa-home nav-icon"
	},{
		"name": "Users",
		"url": "/users",
		"className": "fa fa-users nav-icon"
	},{
		"name": "Contacts",
		"url": "/contacts",
		"className": "fa fa fa-address-book nav-icon"
	},{
		"name": "FAQ",
		"url": "/faq",
		"className": "fa fa-question-circle nav-icon"
	},{
		"name": "About",
		"url": "/about",
		"className": "fa fa-info-circle nav-icon"
	}];


  	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	onClickButton = function (event) {
		event.target.classList.remove('button');
	};

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
	
	ngOnInit() {}
}
