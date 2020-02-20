import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/services/datahandler.service';

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

  ngOnInit(): void {
    this.totalChars = this.dataService.getAllHeroes().length;
    this.totalMarvelChars = this.dataService.getHeroesOfUniverse("Marvel Comics").length;
    this.totalDcChars = this.dataService.getHeroesOfUniverse("DC Comics").length;
    this.totalOtherChars = this.totalChars - (this.totalMarvelChars + this.totalDcChars);
    this.totalGoodChars = this.dataService.getHeroesOfAlignment("good").length;
    this.totalBadChars = this.totalChars - this.totalGoodChars;
  }

}
