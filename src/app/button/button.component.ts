import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  
  //Button'un içindeki text'i kullanıcının gireceği değere değiştirebilmek için input oluşturuyoruz. 

  @Input() buttonText: string = "";
  @Input() id: number = 0;
  @Output() onButtonClick = new EventEmitter<number>();
  
  handleButtonClick(id: number){
    this.onButtonClick.emit(id);
  }
}
