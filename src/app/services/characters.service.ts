import { Injectable } from '@angular/core';
import { Character } from '../models/character.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl: string;
  arrCharacters: Character[];
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://hr.oat.taocloud.org/v1/';
  }

  /* obtener toda la lista de personajes */
  getAll(): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}users`).toPromise();
  }

  /*obtener un unico personaje por id */
  getCharacterById(pId): Promise<Character> {
    return this.httpClient
      .get<Character>(`https://hr.oat.taocloud.org/v1/user/${pId}`)
      .toPromise();
  }

  searchByName(pName): Promise<Character[]> {
    return this.httpClient
      .get<Character[]>(`https://hr.oat.taocloud.org/v1/users?name=${pName}`)
      .toPromise();
  }
}
