import {
  Component,
  OnInit
} from '@angular/core';
import {FootprintService} from "../../services/footprint.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {Footprint} from "../../models/footprint.model";
import {myFunction} from '../../../assets/DonutChart.js';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {svg} from "d3";
import {MoneybalanceService} from "../../services/moneybalance.service";
import {Moneybalance} from "../../models/moneybalance.model";

@Component({
  selector: 'app-footprint-page',
  templateUrl: './footprint-page.component.html',
  styleUrls: ['./footprint-page.component.css']
})


export class FootprintPageComponent implements OnInit {
  info: any;
  private data: Footprint[];
  private dataBalance: Moneybalance[];
  private selected: any;
  currencyButtonChecked = false;
  footprintButtonChecked = false;
  monthNumber:bigint;
  toggle = true;
  status = "Enable";


  months=[
    {
      "id": 0,
      "month": "All months"
    },
    {
      "id": 1,
      "month": "January"
    },
    {
      "id": 2,
      "month": "February"
    },
    {
      "id": 3,
      "month": "March"
    },
    {
      "id": 4,
      "month": "April"
    },
    {
      "id": 5,
      "month": "May"
    },
    {
      "id": 6,
      "month": "June"
    },
    {
      "id": 7,
      "month": "July"
    },
    {
      "id": 8,
      "month": "August"
    },
    {
      "id": 9,
      "month": "September"
    },
    {
      "id": 10,
      "month": "October"
    },
    {
      "id": 11,
      "month": "November"
    },
    {
      "id": 12,
      "month": "December"
    }
  ]


  constructor(private footprintService: FootprintService, private moneybalanceService: MoneybalanceService, private router: Router, private token: TokenStorageService, private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    //this.httpClient.get(this.URL).subscribe(console.log);

    /*this.footprintService.getFootprintForAllCategories().subscribe(
      data => {
        const chartData = data as Footprint[];
        this.data=chartData;
        console.log(chartData);
        myFunction(chartData);

      });*/
  }

  /*onSelect(val: any) {
    console.log(val);
    if(val==0){
      this.displayChartAllMonths();
    } else{
      this.displayChartByMonths(val);
    }
  }*/

  onClick(val: any) {
    this.monthNumber=val;
    this.onClickBis();
  }

  onClickType(val:boolean){
    this.currencyButtonChecked=val;
    this.onClickBis();
  }

  onClickBis() {
    console.log();
    if(this.monthNumber==BigInt(0)){
      if(this.currencyButtonChecked){
        this.displayChartAllMonthCurrency();
      }else {
        this.displayChartAllMonths();
      }
    } else{
      if(this.currencyButtonChecked){
        this.displayChartByMonthCurrency(this.monthNumber);
      }else {
        this.displayChartByMonths(this.monthNumber);
      }
    }
  }

  displayChartAllMonths(){
    this.footprintService.getFootprintForAllCategories().subscribe(
      data => {
        const chartData = data as Footprint[];
        this.data=chartData;
        console.log(chartData);
        myFunction(chartData);
      });
  }

  displayChartByMonths(val: bigint){
    this.footprintService.getFootprintForAllCategoriesPerMonth(val).subscribe(
      data => {
        const chartData = data as Footprint[];
        this.data=chartData;
        console.log(chartData);
        myFunction(chartData);
      });
  }

  displayChartAllMonthCurrency(){
    this.moneybalanceService.getAllCategoriesMoneyBalance().subscribe(
      data => {
        console.log(data);
        const chartData = data as Moneybalance[];
        this.dataBalance=chartData;
        console.log(chartData);
        myFunction(chartData);
      });
  }

  displayChartByMonthCurrency(val: bigint){
    this.moneybalanceService.getMoneySpentForAllCategoriesSortedPerMonth(val).subscribe(
      data => {
        const chartData = data as Moneybalance[];
        this.dataBalance=chartData;
        console.log(chartData);
        myFunction(chartData);
      });
  }

  renameKey({obj, oldKey, newKey}: { obj: any, oldKey: any, newKey: any }){
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  clearChart() {
    window.location.reload();
  }


}
