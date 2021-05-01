import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
})
export class CharacterViewComponent implements OnInit {
  character: Character;
  constructor(
    private charactersService: CharactersService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(async (params) => {
      console.log(params.userId);
      const arrChar = await this.charactersService.getCharacterById(
        params.userId
      );
      console.log(arrChar);

      this.character = arrChar;
    });
  }
}
