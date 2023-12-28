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
    { submenus: [], id: 1, class: "", icon: faHome, name: "Empresas", link: "/companies", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 2, class: "", icon: faUserPlus, name: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 3, class: "", icon: faUsers, name: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 4, class: "", icon: faShoppingCart, name: "Compras", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 5, class: "", icon: faMoneyBillWave, name: "Vendas", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 6, class: "", icon: faStore, name: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 7, class: "", icon: faCity, name: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 8, class: "", icon: faChartBar, name: "Métricas", link: "/metrics", visibleProfiles: ["Estabelecimento"] },
    { submenus: [], id: 9, class: "", icon: faDolly, name: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 10, class: "", icon: faAddressCard, name: "Sobre", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 11, class: "", icon: faCogs, name: "Configurações", link: "/configuration", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [{ submenus: [], id: 12, class: "submenu", icon: faCogs, name: "Transportadora", link: "/shippingCompany", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }], id: 12, class: "", icon: faCogs, name: "Logística", link: "/logistics", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.onload = function () {
      let father = document.getElementsByClassName("selected")[0].parentElement;
      father?.parentElement?.classList.add('active');
    }
  }
  
  onReady() {

  }

  onChangeActive(menu: string, event: any) {
    document.getElementsByClassName('active')[0]?.classList.remove('active');
    document.getElementById(menu)?.classList.add('active');
  }
}
