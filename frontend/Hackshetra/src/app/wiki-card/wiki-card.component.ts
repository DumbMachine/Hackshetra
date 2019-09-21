import { Component, OnInit } from "@angular/core";
import { WikiCardService } from "../services/wiki-card.service";

@Component({
  selector: "app-wiki-card",
  templateUrl: "./wiki-card.component.html",
  styleUrls: ["./wiki-card.component.css"]
})
export class WikiCardComponent implements OnInit {
  public wikiCard = [];

  constructor(private _wikiCardService: WikiCardService) {}

  ngOnInit() {
    this.wikiCard = this._wikiCardService.getWikiCard();
  }
}
