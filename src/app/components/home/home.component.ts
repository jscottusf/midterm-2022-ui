import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getHouseTopline().subscribe(res => console.log(res));
  }

}
