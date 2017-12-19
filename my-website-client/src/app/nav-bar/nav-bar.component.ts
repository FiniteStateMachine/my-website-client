import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github-light',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-icon-light.svg'));

    iconRegistry.addSvgIcon(
      'linkedin-light',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-icon-light.svg'));
  }

  ngOnInit() {
  }

}
