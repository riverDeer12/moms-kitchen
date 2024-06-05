import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PublicMenuComponent} from "./public-menu/public-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, PublicMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moms-kitchen';
}
