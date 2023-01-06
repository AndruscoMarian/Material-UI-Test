import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <mat-icon fontIcon="face"></mat-icon>
    <button mat-button color="primary">Primary</button>
    <mat-checkbox>Check me!</mat-checkbox>
`,
  styles: []
})
export class ButtonsComponent {

}
