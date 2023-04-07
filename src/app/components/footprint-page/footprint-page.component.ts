import {
  Component,
  OnInit
} from '@angular/core';
import {FootprintService} from "../../services/footprint.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";
import {Footprint} from "../../models/footprint.model";
import {myFunction} from '../../../assets/DonutChart.js';

@Component({
  selector: 'app-footprint-page',
  templateUrl: './footprint-page.component.html',
  styleUrls: ['./footprint-page.component.css']
})


export class FootprintPageComponent implements OnInit {
  info: any;
  public chart: any;
  private data: Footprint[];
  constructor(private footprintService: FootprintService, private router: Router, private token: TokenStorageService) {

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.footprintService.getFootprintForAllCategories().subscribe(
      data => {
        const chartData = data as Footprint[];
        this.data=chartData;
        console.log(chartData);
        myFunction(chartData);

      });
  }
}
