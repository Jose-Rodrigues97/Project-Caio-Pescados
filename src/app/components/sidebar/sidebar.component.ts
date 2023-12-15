import { Component } from '@angular/core';
import { faHome, faStore, faUserPlus, faUsers, faShoppingCart, faCity, faMoneyBillWave, faDolly } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  faDolly = faDolly;
  faHome = faHome;
  faStore = faStore;
  faUserPlus = faUserPlus;
  faUsers = faUsers;
  faShoppingCart = faShoppingCart;
  faCity = faCity;
  faMoneyBillWave = faMoneyBillWave;

  menus: any[] = [
    { id: 1, icon: faHome, nome: "Empresa", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 2, icon: faUserPlus, nome: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { id: 3, icon: faUsers, nome: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 4, icon: faShoppingCart, nome: "Compra", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 5, icon: faMoneyBillWave, nome: "Venda", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 6, icon: faStore, nome: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 7, icon: faCity, nome: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    // { id: icon: "", 8, nome: "Métricas", link: "/metricas", visibleProfiles: ["Estabelecimento"] },
    { id: 9, icon: faDolly, nome: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }
  ]
}
