import { Component } from '@angular/core';

@Component({
  selector: 'app-list-configurations',
  templateUrl: './list-configurations.component.html',
  styleUrls: ['./list-configurations.component.css']
})
export class ListConfigurationsComponent {
  menus = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Perfil", description: "teste", link: "profile" },
    { id: 2, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Permissões", description: "teste", link: "permissions" },
    { id: 3, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Tema", description: "teste", link: "theme" }
  ]
}
