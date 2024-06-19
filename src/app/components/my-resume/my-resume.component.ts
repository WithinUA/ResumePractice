import { Component } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent {
  public firstName: string = "Valentin";
  public lastName: string = "Verhovsky";
  public phone: number = 380679864253;
  public email: string = "withinua@gmail.com"
  public town: string = "Kremenchug";
  public jobExp: string = "Network Engineer (5 years)";
  public photo: string = "https://fsx1.itstep.org/api/v1/files/oGecN116ep1Psfpln9WdSYWq5oiXuIo-";
  public date: number = Date.now();
  public desiredSalary: number = 1500;
  public skills: string[] = [
    'C++',
    'C#',
    'HTML',
    'CSS',
    'JS'
  ]

  public getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
