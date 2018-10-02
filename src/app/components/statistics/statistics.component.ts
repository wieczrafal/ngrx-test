import { IStatistics } from './../../models/statistics.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() set phrases(value: string[][]) {
    this.statistics = this.generateStatistics(value);
  }
  public statistics: IStatistics;

  private generateStatistics(phrases: string[][]): IStatistics {
    if (!phrases || !phrases.length) return null;
    const allPhrases: string[] = phrases.reduce((a, b) => a.concat(b), []).filter(phrase => phrase && phrase.length);

    return {
      longestWord: allPhrases.reduce((a, b) => a.length > b.length ? a : b),
      shortestWord: allPhrases.reduce((a, b) => a.length < b.length ? a : b),
      totalWords: allPhrases.length,
      totalColumns: phrases.length
    };
  }

}
