import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InlineEditingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected title = 'angularStudyV20';
}
