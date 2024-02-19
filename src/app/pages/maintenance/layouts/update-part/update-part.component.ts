import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaintenanceService } from 'src/app/core/services/maintenance.service';
import { SopService } from 'src/app/core/services/sop.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss']
})
export class UpdatePartComponent {
// bread crumb items
breadCrumbItems!: Array<{}>;
// Data Area
dataArea: any;

// INPUTAN
partNumber!: number;
description!: string;
areaId!: any;
qtyStock!: number;
price!: number;
refurbished_at!: Date;

paramsId!: number;
areaParamsId!: number;

constructor(private http: HttpClient, private apiService: MaintenanceService, private router: Router, private sopService: SopService, private route: ActivatedRoute) {}

ngOnInit(){
  this.getbreadCrumbItems();
  this.getAllArea();
  this.getParamsId();
  }

  getbreadCrumbItems(){
    this.breadCrumbItems = [
      { label: 'Maintenance' },
      { label: 'Update-part'}
    ];
  }

  getParamsId(){
    this.route.paramMap.subscribe(params => {
      const partIdParam = params.get('partId');
      const areaIdParam = params.get('areaId');
      if (partIdParam !== null && areaIdParam !== null) {
        this.paramsId = +partIdParam;
        this.areaParamsId = +areaIdParam;
        this.getPartById(this.paramsId);
      } else {
        console.error('Part ID parameter is null');
      }
    });
  }
  //Get Part
  getPartById(partId: number){
    this.apiService.getPartById(partId).subscribe(
      (res: any) => {
        let dataInput = res.data[0]
  
        this.partNumber = dataInput.part_number;
        this.description = dataInput.description;
        this.areaId = dataInput.id_area;
        this.qtyStock = dataInput.qty_stock;
        this.price = dataInput.price;
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

   serviceUpdate(newData: any){
    this.apiService.updatePart(this.paramsId, newData).subscribe(
      (res:any) => {
        this.showModal();
      }
    )
   }

   updatePart(){
    if(parseInt(this.areaId) === 6){
      let newData = {
        "part_number": this.partNumber,
        "description": this.description,
        "id_area": parseInt(this.areaId),
        "qty_stock": this.qtyStock,
        "price": this.price,
        "refurbished_at": this.refurbished_at
      }
      // console.log(newData)
      
      this.serviceUpdate(newData)
      
    } else {
      let newData = {
        "part_number": this.partNumber,
        "description": this.description,
        "id_area": parseInt(this.areaId),
        "qty_stock": this.qtyStock,
        "price": this.price
      }
      // console.log(newData)
  
      this.serviceUpdate(newData)
    }
   }

  //  On Submit
  onSubmit(){
   this.updatePart();
  }

  

   // MODAL
   showModal(){
    $('#successModal').modal('show');
  }
  closeModal(){
    $('#successModal').modal('hide');
    this.router.navigate(['/part-maintenance', this.areaParamsId]);
  }

}
