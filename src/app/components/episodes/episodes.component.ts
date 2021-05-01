import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  arrEpisodes: Episode[];

  constructor(
    private episodesServices: EpisodesService
  ) {
    this.arrEpisodes = [];

  }

  async ngOnInit() {
    this.arrEpisodes = await this.episodesServices.getAll();
    console.log(this.arrEpisodes);

  }

  getDate(pDateString) {
    const arrDate = pDateString.split('-');
    return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`;
  }

}
