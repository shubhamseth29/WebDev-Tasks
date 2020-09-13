import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fetchWeatherData()
  {
    let location =
    {
      city: this.city
    }
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['app']);
  }
}
