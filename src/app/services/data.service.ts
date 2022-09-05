import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "https://projects.fivethirtyeight.com/2022-general-election-forecast-data/";
  senateTopline: string = `${this.baseUrl}senate_national_toplines_2022.csv`;
  houseTopline: string = `${this.baseUrl}house_national_toplines_2022.csv`;
  senateStateToplines: string = `${this.baseUrl}senate_state_toplines_2022.csv`;
  houseDistrictToplines: string = `${this.baseUrl}house_district_toplines_2022.csv`;
  senateSeatDistribution: string = `${this.baseUrl}senate_seat_distribution_2022.csv`;
  houseSeatDistrinbution: string = `${this.baseUrl}house_seat_distribution_2022.csv`;
  jointProbabilities: string = `${this.baseUrl}joint_probabilities_2022.csv`;

  constructor(private http: HttpClient, private papa: Papa) { }

  getSenateTopline() {
    return this.http.get(this.senateTopline, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getHouseTopline() {
    return this.http.get(this.houseTopline, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getSenateStateToplines() {
    return this.http.get(this.senateStateToplines, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getHouseDistrictToplines() {
    return this.http.get(this.houseDistrictToplines, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getSenateSeatDistribution() {
    return this.http.get(this.senateSeatDistribution, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getHouseSeatDistrinbution() {
    return this.http.get(this.houseSeatDistrinbution, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }

  getJointProbabilities() {
    return this.http.get(this.jointProbabilities, { responseType: 'text' }).pipe(map(csvData => {
      const data = this.papa.parse(csvData,{ header: true }).data;
      return data;
    }));
  }
}
