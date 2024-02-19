import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { SopService } from 'src/app/core/services/sop.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.scss']
})
export class AddPartComponent {
// bread crumb items
breadCrumbItems!: Array<{}>;

// Data Area
dataArea!: any;

// INPUTAN
partNumber!: number;
description!: string;
areaId!: any;
qtyStock!: number;
price!: number;

  constructor(private http: HttpClient, private apiService: MaintenanceService, private router: Router, private sopService: SopService) {}

  ngOnInit(){
  this.getbreadCrumbItems();
  this.getAllArea();
  }

  getbreadCrumbItems(){
    this.breadCrumbItems = [
      { label: 'Maintenance' },
      { label: 'add-part'}
    ];
  }

  // ADD DATA
  insertDocument(data: any){
    this.apiService.insertPart(data).subscribe(
      (res: any) => {
        this.showModal();
      }
    )
  }

  // Fecth All Area
  getAllArea(){
    this.sopService.getAllAreas().subscribe(
      (res: any) => {
        this.dataArea = res.data
      }
    )
   }

  onSubmit(){
    if(parseInt(this.areaId) === 6){
      let data = {
        "id_area": parseInt(this.areaId),
        "part_number": this.partNumber,
        "description": this.description,
        "refurbished_at": new Date(),
        "price": this.price
      }
      // console.log(data);
      this.insertDocument(data)
    } else {
      let data = {
        "id_area": parseInt(this.areaId),
        "part_number": this.partNumber,
        "description": this.description,
        "price": this.price
      }
      // console.log(data);
      this.insertDocument(data) 
    }
  }


  // MODAL
  showModal(){
    $('#successModal').modal('show');
  }
  closeModal(){
    $('#successModal').modal('hide');
    this.router.navigate(['/maintenance']);
  }

}
