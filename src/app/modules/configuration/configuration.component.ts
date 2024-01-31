import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  menus = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Perfil", description: "teste", link: "profile" },
    { id: 2, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Permissões", description: "teste", link: "permissions" },
    { id: 3, image: "../../assets/Caio_Pescados-removebg-preview.png", title: "Tema", description: "teste", link: "theme" }
  ]
}
