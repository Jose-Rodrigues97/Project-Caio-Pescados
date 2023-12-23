import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faStore, faUserPlus, faUsers, faChartBar, faShoppingCart, faCity, faMoneyBillWave, faDolly, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  faChartBar = faChartBar;
  faAddressCard = faAddressCard;
  faDolly = faDolly;
  faHome = faHome;
  faStore = faStore;
  faUserPlus = faUserPlus;
  faUsers = faUsers;
  faShoppingCart = faShoppingCart;
  faCity = faCity;
  faMoneyBillWave = faMoneyBillWave;

  menus: any[] = [
    { id: 1, class: "", icon: faHome, nome: "Empresas", link: "/companies", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 2, class: "", icon: faUserPlus, nome: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { id: 3, class: "", icon: faUsers, nome: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 4, class: "", icon: faShoppingCart, nome: "Compras", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 5, class: "", icon: faMoneyBillWave, nome: "Vendas", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 6, class: "", icon: faStore, nome: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 7, class: "", icon: faCity, nome: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    { id: 8, class: "", icon: faChartBar, nome: "Métricas", link: "/metrics", visibleProfiles: ["Estabelecimento"] },
    { id: 9, class: "", icon: faDolly, nome: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 10, class: "", icon: faAddressCard, nome: "Sobre", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { id: 11, class: "", icon: faCogs, nome: "Configurações", link: "/configuration", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.onload = function () {
      document.getElementsByClassName("selected")[0].parentElement?.classList.add('active'); 
    }
  }
  onReady() {

  }

  onChangeActive(event: any) {
    document.getElementsByClassName('active')[0]?.classList.remove('active');
    document.getElementById(event)?.classList.add('active');
  }
}
