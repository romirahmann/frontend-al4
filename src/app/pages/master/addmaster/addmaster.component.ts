import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SopService } from 'src/app/core/services/sop.service';

@Component({
  selector: 'app-addmaster',
  templateUrl: './addmaster.component.html',
  styleUrls: ['./addmaster.component.scss']
})
export class AddmasterComponent {

  areas: any[] = [];
  roles: any[] = [];
  groups: any[] = [];

  nama_user!: string;
  nik!: number;
  password!: string; 
  role!: number;
  area!: number;
  group!: number;

  selectedArea: string = '';
  selectedRole: string = '';
  selectedGroup: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private sopService: SopService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedArea = params['area'];
      this.selectedRole = params['role'];
      this.selectedGroup = params['group'];
    });

    this.fetchAreas();
    this.fetchRoles();
    this.fetchGroups();
  }

  fetchAreas(): void {
    this.apiService.getAllAreas().subscribe(
      (res: any) => {
        this.areas = res.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  fetchRoles(): void {
    this.apiService.getAllRole().subscribe(
      (res: any) => {
        this.roles = res.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  fetchGroups(): void {
    this.apiService.getAllTeam().subscribe(
      (res: any) => {
        this.groups = res.data[0];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addUser(): void {
    const newUser = {
      nama_user: this.nama_user,
      nik: this.nik,
      password: this.password,
      role_id: this.role,
      id_area: this.area,
      group_id:this.group

    }
  this.apiService.insertUser(newUser).subscribe(
    (res: any) => {
      this.router.navigate(['/master'])
    },
    (error: any) => {
      console.error('Error:', error);
    }
  );
}

}
