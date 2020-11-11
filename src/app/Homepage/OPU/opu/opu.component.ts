import { Component, OnInit } from '@angular/core';
import { IframeUrlService } from 'src/app/Homepage/iframe-url.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-opu',
  templateUrl: './opu.component.html',
  styleUrls: ['./opu.component.css']
})
export class OpuComponent implements OnInit {
  ratio: number;
  newHeight: number;
  iframsrc: SafeResourceUrl;
  array = [];
  index;

  constructor(private iframeurl: IframeUrlService, private sanitizer: DomSanitizer, private router: Router, private url: IframeUrlService) { }

  ngOnInit(): void {
    this.iframeurl.currentURL.subscribe({
      next: url => {
        this.array = []
        this.iframsrc = this.sanitizer.bypassSecurityTrustResourceUrl(url)
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

}
