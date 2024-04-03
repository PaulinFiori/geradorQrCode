import { Component, OnInit } from "@angular/core";

declare var jQuery: any;

@Component({
  selector: "topnavigationlayout",
  templateUrl: "topNavigationLayout.template.html",
  host: {
    "(window:resize)": "onResize()"
  }
})
export class TopNavigationLayoutComponent implements OnInit {
  public ngOnInit(): any {
  }

  public onResize() {
  }
}
