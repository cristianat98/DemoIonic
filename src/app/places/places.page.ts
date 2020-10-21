import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {


  private places = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://megaconstrucciones.net/images/monumentos/foto/torre-eiffel.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue Of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: ['Awesome place', 'wonderful experience']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
