import { Component } from '@angular/core';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {
  suppliers = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", CNPJ:"36436463436", telephone: 5198435151, email: "marpeixe@gmail.com" }
  ]
}
