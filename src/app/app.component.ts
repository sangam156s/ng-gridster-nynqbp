import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

interface GridsterItemMik extends GridsterItem {
  backgroundCol?: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItemMik>;

  static itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.dashboard = [
      { cols: 1, rows: 3, y: 0, x: 0 },
      { cols: 1, rows: 6, y: 0, x: 0 },
      { cols: 2, rows: 4, y: 0, x: 0 },
      { cols: 1, rows: 4, y: 0, x: 0 },
      { cols: 1, rows: 6, y: 0, x: 0 },
      { cols: 2, rows: 5, y: 0, x: 0 },
      { cols: 1, rows: 5, y: 0, x: 0 },
      { cols: 1, rows: 3, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
      { cols: 1, rows: 3, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 3, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
      { cols: 1, rows: 3, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 0 },
    ];
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      displayGrid: 'none',
      maxCols: 3,
      // maxRows: 20,
      draggable: {
        enabled: true, // enables to drag element
        // dropOverItems: true, // nothing changes actually
      },
      pushItems: true,
      // disableScrollHorizontal: true, // can drag only to top or bottom
      resizable: { enabled: true }, // enables to resize element
    };
    this.setRandomColor();
  }

  changedOptions() {
    console.log('changedOptions');
    this.options.api.optionsChanged();
  }

  removeItem(e, item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push(
      { cols: 1, rows: 3, y: 0, x: 0, backgroundCol: this.getRandomColor() }
    );
  }

  minimizeItem(e, item) {
    item.rows = 1;
    this.options.api.optionsChanged(); // MIKEY NOTE: this makes things going in Gridster2!
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomColor(): void {
    for (let i = 0; i < this.dashboard.length; i++) {
      this.dashboard[i].backgroundCol = this.getRandomColor();
    }
  }
}
