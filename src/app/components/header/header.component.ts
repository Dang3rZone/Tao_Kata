import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search: String;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchValue() {
    this.router.navigate(['search', this.search]);
  }
}
