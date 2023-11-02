import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @ViewChild('button', { static: true }) button: ElementRef<ButtonComponent>;
  @Input() buttonText: string;
  constructor(private render: Renderer2) {}
  feedback(){
    if (this.buttonText === "Add To Cart") {
      this.buttonText = "Added To Cart";
      this.render.removeClass(this.button.nativeElement, 'primary-btn');
      this.render.addClass(this.button.nativeElement, 'primary-btn-success');
      setTimeout(() => {
        this.buttonText = "Add To Cart";
        this.render.removeClass(this.button.nativeElement, 'primary-btn-success');
        this.render.addClass(this.button.nativeElement, 'primary-btn');
      }, 650);
    }
  }
  ngOnInit(): void {
    if (this.buttonText === 'Search') {
      this.render.removeClass(this.button.nativeElement, 'primary-btn');
      this.render.addClass(this.button.nativeElement, 'au-btn-submit');
    } else if (this.buttonText === 'Remove') {
      this.render.removeClass(this.button.nativeElement, 'primary-btn');
      this.render.addClass(this.button.nativeElement, 'button-remove');
    } else if (this.buttonText === 'Cancel') {
      this.render.removeClass(this.button.nativeElement, 'primary-btn');
      this.render.addClass(this.button.nativeElement, 'cancel-btn');
    }
  }
}
