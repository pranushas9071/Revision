import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}
  name: any;
  canDisplay: boolean = true;
  pets:String[] = ['dog', 'birds', 'fish'];
  subject:any;

  apply() {
    return { color: 'purple' };
  }
  ngOnInit(): void {}
}
