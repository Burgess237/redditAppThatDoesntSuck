import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  display$ = this.apiService.get('subreddits/default.json');
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('subreddits/default.json').subscribe();
  }
}
