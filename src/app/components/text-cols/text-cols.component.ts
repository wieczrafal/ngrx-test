import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-text-cols',
  templateUrl: './text-cols.component.html',
  styleUrls: ['./text-cols.component.scss']
})
export class TextColsComponent {
  @Input() set phrases(rows: string[][]) {
    this.rows = rows;
    this.maxColumns = rows.reduce((p, c) => p > c.length ? p : c.length, 0);
  }
  @Output() deleteRow = new EventEmitter<number>();
  @Output() deleteColumn = new EventEmitter<number>();
  @Output() editRow = new EventEmitter<number>();

  public rows: string[][];
  public maxColumns: number = 0;

  public fill(phrases: string[]): string[] {
    if (phrases.length === this.maxColumns) return phrases;
    const filledPhrases = phrases.slice();
    const originalLength = phrases.length;
    filledPhrases.length = this.maxColumns;
    filledPhrases.fill(null, originalLength, this.maxColumns);
    return filledPhrases;
  }
}
