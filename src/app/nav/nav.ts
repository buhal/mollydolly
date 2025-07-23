import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
@Component({
  selector: 'app-nav',
  imports: [MaterialModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
  standalone: true,
})
export class AppNav {}
