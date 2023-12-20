import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companies = [
    { id: 1, image: "../../assets/Caio_Pescados-removebg-preview.png", name: "Mar e Peixe", isHeadquarters: true, phone: 5198435151, email: "marpeixe@gmail.com", state: "RS", city: "Rio Grande", taxNumber: 65181611616161, address: "Rua Qualquer" },
    { id: 2, image: "", name: "Caio Pescado", isHeadquarters: false, phone: 75757425425, email: "caio@gmail.com", state: "RS", city: "Alvorada", taxNumber: 676575467575747, address: "Rua Frederico Dhill" },
  ]
}
