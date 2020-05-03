import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links = ['dashboard', 'news', 'precautions', 'addnews'];

  activeLink = this.links[0];
  background: ThemePalette = undefined;


  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['home/dashboard']);
  }

}
