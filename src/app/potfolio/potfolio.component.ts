import { Component } from '@angular/core';

@Component({
  selector: 'app-potfolio',
  templateUrl: './potfolio.component.html',
  styleUrls: ['./potfolio.component.css']
})
export class PotfolioComponent {
  layerSymbol():void{
    alert("Hello Ahmed")
  }
  closeLayer():void{
    alert("Hello walid")
  }
  onSale:boolean = true;
  price:number = 300;
  status: boolean = false;
// clickVent(){
//     this.status = !this.status;       
// }
}
