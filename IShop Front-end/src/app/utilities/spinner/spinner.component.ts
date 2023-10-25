import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  @Input() isServerOnline: boolean;
  printServerOffline: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      if(!this.isServerOnline){
          this.printServerOffline = true;
      }
    } ,5000)
  }
}
