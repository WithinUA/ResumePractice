import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  @Input() Data: string[] = [];
  public lang: string | undefined;
  ngOnInit(): void {}
  checkLanguage(language: string){
    this.lang = language;
  }
}
