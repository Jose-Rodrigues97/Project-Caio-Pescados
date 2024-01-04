import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCalculator, faTruck, faGlobeAmericas, faHome, faStore, faUserPlus, faUsers, faChartBar, faShoppingCart, faCity, faMoneyBillWave, faDolly, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons';

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
  faGlobeAmericas = faGlobeAmericas;
  faTruck = faTruck;
  faCalculator = faCalculator;

  previousMenuId = '';
  previousSubMenuId = '';

  menus: any[] = [
    { submenus: [], id: 1, class: "", icon: faHome, name: "Empresas", link: "/companies", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 2, class: "", icon: faUserPlus, name: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 3, class: "", icon: faUsers, name: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [{ submenus: [], id: 102, class: "submenu", icon: faShoppingCart, name: "Compras", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 103, class: "submenu", icon: faMoneyBillWave, name: "Vendas", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 104, class: "submenu", icon: faChartBar, name: "Métricas", link: "/metrics", visibleProfiles: ["Estabelecimento"] }], id: 11, class: "", icon: faCalculator, name: "Contabilidade", link: "/accounting", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [{ submenus: [], id: 100, class: "submenu", icon: faDolly, name: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 101, class: "submenu", icon: faTruck, name: "Transportadora", link: "/shippingCompany", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }], id: 12, class: "", icon: faGlobeAmericas, name: "Logística", link: "/logistics", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 6, class: "", icon: faStore, name: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 7, class: "", icon: faCity, name: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 9, class: "", icon: faAddressCard, name: "Sobre", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 10, class: "", icon: faCogs, name: "Configurações", link: "/configuration", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.onload = function () {
      let activeMenu = document.getElementsByClassName("selected");
      for (let index = 0; index < activeMenu.length; index++) {
        activeMenu[index].parentElement?.parentElement?.parentElement?.classList.add('active');
        if (activeMenu[index].parentElement?.tagName! == 'LI') {
          activeMenu[index].parentElement?.classList.add('active');
        }
        activeMenu[index].parentElement?.parentElement?.classList.remove('hidden-submenu');
      }
    }
  }

  onReady() {

  }

  onChangeActive(menu: string) {
    let desactiveMenu = document.getElementsByClassName('active');
    for (let index = 0; index < desactiveMenu.length; index++) {
      desactiveMenu[index].classList.remove('active')
    }
    let activeMenu = document.getElementById(menu);
    activeMenu?.classList.add('active');
    if (this.previousMenuId != '' && activeMenu?.childElementCount! > 1) {
      document.getElementById(this.previousMenuId)?.children[1].classList.add('hidden-submenu');
    }

    if (this.previousMenuId != menu) {
      if (activeMenu?.children[1].childElementCount! > 0) {
        activeMenu?.children[1].classList.remove('hidden-submenu');
      }
    } else {
      this.previousMenuId = '';
      return
    }
    this.previousMenuId = menu;
  }

}

