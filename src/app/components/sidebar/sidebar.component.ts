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
    { id: 1, class: "active", icon: faHome, nome: "Empresa", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 2, class: "", icon: faUserPlus, nome: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { id: 3, class: "", icon: faUsers, nome: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 4, class: "", icon: faShoppingCart, nome: "Compra", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 5, class: "", icon: faMoneyBillWave, nome: "Venda", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 6, class: "", icon: faStore, nome: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 7, class: "", icon: faCity, nome: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    // { id: class:"", icon: "", 8, nome: "Métricas", link: "/metricas", visibleProfiles: ["Estabelecimento"] },
    { id: 9, class: "", icon: faDolly, nome: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }
  ]

  onChangeActive(event: any) {
    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById(event)?.classList.add('active');
  }
}
