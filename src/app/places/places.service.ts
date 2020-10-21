import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://megaconstrucciones.net/images/monumentos/foto/torre-eiffel.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Statue Of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
    id: '3',
      title: 'Awesome Place',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: []
    }
  ]
  constructor() { }

  getplaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
      return {
        ...this.places.find(place => {
          return place.id === placeId
      })
    } 
  }

  addPlaces(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
