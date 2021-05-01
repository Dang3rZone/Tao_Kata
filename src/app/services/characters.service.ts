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

  // GET all patients
  getAll(): Promise<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.baseUrl}users?limit=500`)
      .toPromise();
  }

  // GET patient by ID
  getCharacterById(pId): Promise<Character> {
    return this.httpClient
      .get<Character>(`${this.baseUrl}user/${pId}`)
      .toPromise();
  }
  // GET patient by name or lastname
  searchByName(pName): Promise<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.baseUrl}users?name=${pName}`)
      .toPromise();
  }
}
