import { Component } from '@angular/core';

@Component({
  selector: 'app-paper',
  standalone: true,
  imports: [],
  templateUrl: './paper.component.html',
  styleUrl: './paper.component.scss'
})
export class PaperComponent {
  flagPag2=false;
  page=1;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  changePage(num:number){
    if(num==1){
      this.page=1;
    }else if(num==2){
      this.page=2;
    }else if(num==3){
      this.page=3;
    }
  }
}
