import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { ColorMap, Hero, Color } from '../../interfaces/hero';
import { heroes } from '../../data/heroes';
import { HeroCanFlyTextPipe } from '../../pipes/hero-can-fly-text.pipe';
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";
import { HeroSortByPipe } from "../../pipes/hero-sort-by.pipe";
import { JsonPipe } from '@angular/common';
import { HeroFilterPipe } from "../../pipes/hero-filter.pipe";

@Component({
  selector: 'app-custom',
  imports: [JsonPipe, ToggleCasePipe, HeroCanFlyTextPipe, HeroColorPipe, HeroTextColorPipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom.component.html',
  styles: ``
})
export default class CustomComponent {

  name = signal("Cristian Leon");

  toggleCase = signal(false);

  heroes = signal<Hero[]>(heroes);

  sortBy = signal<'name' | 'canFly' | 'color' | 'creator' | "">("");

  searchQuery = signal<string>("");

}
