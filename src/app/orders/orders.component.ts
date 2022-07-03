import { Component, OnInit } from '@angular/core';
import { HelperserviceService } from '../helperservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
dataSource : any
displayedColumns = ['Product Name','Price']
  constructor(private _helpservice : HelperserviceService) { }

  ngOnInit(): void {
    this._helpservice.getallUsers().subscribe(data=>{
      console.log(data)
      this.dataSource = data
    })
  }

}
