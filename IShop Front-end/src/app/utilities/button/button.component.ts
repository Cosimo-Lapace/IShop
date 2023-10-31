import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @ViewChild('button', { static: true }) button: ElementRef<ButtonComponent>;
  @Input() buttonText: string;
  constructor(private render: Renderer2){}
  ngOnInit(): void {
    if(this.buttonText === 'Search'){
      this.render.addClass(this.button.nativeElement, 'au-btn-submit');
      this.render.removeClass(this.button.nativeElement, 'primary-btn');
    }
  }

}
