import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public page: number;
  arrCharacters: Character[];

  constructor(
    private characterService: CharactersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrCharacters = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      // console.log(Object.entries(params));

      if (Object.entries(params).length > 0) {
        // search by name
        this.arrCharacters = await this.characterService.searchByName(
          params.firstName
        );
      } else {
        // show all patients
        this.arrCharacters = await this.characterService.getAll();
      }
    });
  }

  getCharacter(pId) {
    this.router.navigate(['character', pId]);
  }
}
