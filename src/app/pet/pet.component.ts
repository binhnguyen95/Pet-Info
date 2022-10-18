import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://www.thesprucepets.com/thmb/JiflE3H8KDyk3MKDwNugBR9gEWc=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/small-rodents-as-pets-1237271-hero-e581a193e8f545fcb6306706c4bd20b0.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
