import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle("BRL STATION");
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
