import { Component } from '@angular/core';
import { faSortDown, faCalculator, faTruck, faGlobeAmericas, faHome, faStore, faUserPlus, faUsers, faChartBar, faShoppingCart, faCity, faMoneyBillWave, faDolly, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons';

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
  faSortDown = faSortDown;

  previousMenuId = '';
  previousSubMenuId = '';

  menus: any[] = [
    { submenus: [], id: 1, class: "", icon: faHome, name: "Empresas", link: "/companies", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 2, class: "", icon: faUserPlus, name: "Colaboradores", link: "/collaborators", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 3, class: "", icon: faUsers, name: "Clientes", link: "/customers", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [{ submenus: [], id: 102, class: "", icon: faShoppingCart, name: "Compras", link: "/purchase", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 103, class: "", icon: faMoneyBillWave, name: "Vendas", link: "/sale", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 104, class: "", icon: faChartBar, name: "Métricas", link: "/metrics", visibleProfiles: ["Estabelecimento"] }], id: 11, class: "", icon: faCalculator, name: "Contabilidade", link: "/accounting", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [{ submenus: [], id: 100, class: "", icon: faDolly, name: "Estoque", link: "/stock", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }, { submenus: [], id: 101, class: "", icon: faTruck, name: "Transportadora", link: "/shippingCompany", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] }], id: 12, class: "", icon: faGlobeAmericas, name: "Logística", link: "/logistics", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 6, class: "", icon: faStore, name: "Produtos", link: "/products", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 7, class: "", icon: faCity, name: "Fornecedores", link: "/suppliers", visibleProfiles: ["Time", "Atleta"] },
    { submenus: [], id: 9, class: "", icon: faAddressCard, name: "Sobre", link: "/about", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
    { submenus: [], id: 10, class: "", icon: faCogs, name: "Configurações", link: "/configuration", visibleProfiles: ["Estabelecimento", "Federação", "Time", "Atleta"] },
  ]

  constructor(
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
    let activeMenu = document.getElementById(menu);
    let desactiveMenu = document.getElementsByClassName('active');

    if (activeMenu?.children[0].childElementCount! > 1) {
      activeMenu?.children[0].children[1].classList.remove('hidden-submenu');
      activeMenu?.classList.add('submenu');
      activeMenu?.children[0].children[0].children[1].classList.remove('hidden-arrow-menus');
    } else {
      for (let index = 0; index < desactiveMenu.length; index++) {
        desactiveMenu[index].classList.remove('active');
      }
      if (this.previousMenuId != '') { //AJUSTAR DUPLO SUBMENU
        let previousMenu = document.getElementById(this.previousMenuId);
        if (activeMenu?.children[0].childElementCount! == 1) { //É NÓ OU FOLHA
          if (previousMenu?.children[0].childElementCount! > 1) {
            previousMenu?.children[0].children[1].classList.add('hidden-submenu');
            previousMenu?.children[0].children[0].children[1].classList.add('hidden-arrow-menus');
            previousMenu?.classList.remove('submenu');
          } else {
            let removeSubMenu = document.getElementsByClassName('submenu');
            for (let index = 0; index < removeSubMenu.length; index++) {
              removeSubMenu[index].classList.remove('active');
            }
          }
        } else{

        }
      }
      console.log(this.previousMenuId)
      console.log(menu)
      activeMenu?.classList.add('active');
    }
    this.previousMenuId = menu;

  }
}

