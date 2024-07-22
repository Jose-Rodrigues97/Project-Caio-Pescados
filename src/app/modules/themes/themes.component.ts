import { Component, Input } from '@angular/core';
import { CollaboratorModel } from '../collaborators/models/collaborator-model';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CollaboratorService } from '../collaborators/services/collaborator-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})

export class ThemesComponent {
  @Input() menuId!: string;

  name!: String;
  permission!: string;
  image!: Blob;

  constructor(private modalService: BsModalService,
    private router: Router,
    private collaboratorService: CollaboratorService) { }

  ngOnInit(): void {
    this.getUserById("ee2a6cac-eee0-4fd6-af3f-d34ee3a4c290");
  }

  getUserById(userId: string) {
    this.collaboratorService.getUserById(userId).subscribe((user: CollaboratorModel) => {
      this.name = user.name;
      this.image = user.image.image;
      this.permission = user.role;
    });
  }
}
