import { Component, OnInit } from '@angular/core';
import { OneLink } from './OneLink';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  public links: OneLink[] = [
    {
      name: "GitHub",
      link: "https://github.com/WithinUA"
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCLxEsbP0_umHV16Hq9YRtmg"
    }
  ]
  ngOnInit(): void {
    
  }
}
