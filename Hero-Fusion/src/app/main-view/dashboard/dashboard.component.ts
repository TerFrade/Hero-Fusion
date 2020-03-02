import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/services/datahandler.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DatahandlerService) { }

  totalChars: number = 0;
  totalMarvelChars: number = 0;
  totalDcChars: number = 0;
  totalOtherChars: number = 0
  totalGoodChars: number = 0;
  totalBadChars: number = 0;

  barChartOptions: RadialChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];

  barChartData: ChartDataSets[] = [

  ];
  barChartColor: Color[] = [
    { backgroundColor: "#f56565" },
    { backgroundColor: "#2b6cb0" },
    { backgroundColor: "#f6ad55" },
  ]
  barChartType: ChartType = 'bar';

  ngOnInit(): void {
    this.totalChars = this.dataService.getAllHeroes().length;
    this.totalMarvelChars = this.dataService.getHeroesOfUniverse("Marvel Comics").length;
    this.totalDcChars = this.dataService.getHeroesOfUniverse("DC Comics").length;
    this.totalOtherChars = this.totalChars - (this.totalMarvelChars + this.totalDcChars);
    this.totalGoodChars = this.dataService.getHeroesOfAlignment("good").length;
    this.totalBadChars = this.totalChars - this.totalGoodChars;
    this.loadGraphData();
  }

  loadGraphData() {

    var marvelData = [0, 0, 0, 0, 0, 0];
    var dcData = [0, 0, 0, 0, 0, 0];
    var otherData = [0, 0, 0, 0, 0, 0];

    this.dataService.heroes.map(x => {
      if (x.Universe == "Marvel Comics" && x.Alignment == "good") {
        marvelData[0] += x.Intelligence;
        marvelData[1] += x.Strength;
        marvelData[2] += x.Speed;
        marvelData[3] += x.Durability;
        marvelData[4] += x.Power;
        marvelData[5] += x.Combat;
      }
      else if (x.Universe == "DC Comics" && x.Alignment == "good") {
        dcData[0] += x.Intelligence;
        dcData[1] += x.Strength;
        dcData[2] += x.Speed;
        dcData[3] += x.Durability;
        dcData[4] += x.Power;
        dcData[5] += x.Combat;
      }
      else if (x.Universe != "Marvel Comics" && x.Universe != "DC Comics" && x.Alignment == "good") {
        otherData[0] += x.Intelligence;
        otherData[1] += x.Strength;
        otherData[2] += x.Speed;
        otherData[3] += x.Durability;
        otherData[4] += x.Power;
        otherData[5] += x.Combat;
      }
    })
    this.barChartData.push({ data: marvelData, label: "Marvel Heroes" }, { data: dcData, label: "DC Heroes" }, { data: otherData, label: "Other Heroes" })
  }

}
