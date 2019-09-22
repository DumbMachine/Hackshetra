import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-wiki-card",
  templateUrl: "./wiki-card.component.html",
  styleUrls: ["./wiki-card.component.css"]
})
export class WikiCardComponent implements OnInit {
  @Input() wikiCard;

  // wiki = JSON.parse(this.wikiCard);

  constructor() {}

  ngOnInit() {}
}
