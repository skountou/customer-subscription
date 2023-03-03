import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { TranslateConfigService } from './translate-config.service';
import { getApiDataService } from './getApiData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer-subscription';

  userData: User | any;
  responseData:any;
  
  public selectedLanguage: string = 'en';
  translateConfigService: any;

  constructor(
    private getApiData:getApiDataService
    // private translateConfig:TranslateConfigService
    ) {}

  ngOnInit(){
    // this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.responseData = this.getApiData.fetchData();
    this.userData = JSON.parse(this.responseData);
  }

  //Custom functions
  onSubmit(form:NgForm){

  }

  // fetchInitialData(){
  //     fetch("dummy-API-data.json")
  //     .then(response => response.json())
  //     .catch(err => err.json())
  // }

  

}
