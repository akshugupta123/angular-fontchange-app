import { Component } from '@angular/core';

@Component({
  selector: 'app-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontResizerComponent {
  fontSize: number = 16;

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.fontSize > 2) {
      this.fontSize -= 2;
    }
  }
}
