import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { InlineEditingComponent } from './pages/inline-editing/inline-editing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InlineEditingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angularStudyV20';
}
