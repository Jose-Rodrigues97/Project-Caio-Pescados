import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faSortDown, faCalculator, faTruck, faGlobeAmericas, faHome, faStore, faUserPlus, faUsers, faChartBar, faShoppingCart, faCity, faMoneyBillWave, faDolly, faAddressCard, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, AfterViewInit {
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

  @Input() menuId!: string;
  @Input() submMenuId!: string;
  @Input() permission!: string;
  previousMenuId = '';
  previousSubMenuId = '';

  menus: any[] = [
    {
      submenus: [], id: 1, class: "", icon: faHome,
      name: "Empresas",
      link: "/company/companiesList",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 2, class: "", icon: faUserPlus,
      name: "Colaboradores",
      link: "/collaborator/collaboratorsList",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 3, class: "", icon: faUsers,
      name: "Clientes",
      link: "/customer/customersList",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [{
        submenus: [], id: 102, class: "", icon: faShoppingCart,
        name: "Compras",
        link: "/purchase/purchaseList",
        visibleProfiles: ["User", "Admin"]
      }, {
        submenus: [], id: 103, class: "", icon: faMoneyBillWave,
        name: "Vendas",
        visibleProfiles: ["User", "Admin"]
      }, {
        submenus: [], id: 104, class: "", icon: faChartBar,
        name: "Métricas", link: "/metrics",
        visibleProfiles: ["User", "Admin"]
      }], id: 11, class: "", icon: faCalculator,
      name: "Contabilidade",
      link: "/accounting",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [{
        submenus: [], id: 100, class: "", icon: faDolly,
        name: "Estoque",
        link: "/logistic",
        visibleProfiles: ["User", "Admin"]
      }, {
        submenus: [], id: 101, class: "", icon: faTruck,
        name: "Transportadora",
        link: "/shippingCompany",
        visibleProfiles: ["User", "Admin"]
      }], id: 12, class: "", icon: faGlobeAmericas,
      name: "Logística", link: "/logistics",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 6, class: "", icon: faStore,
      name: "Produtos",
      link: "/product/productList",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 7, class: "", icon: faCity,
      name: "Fornecedores",
      link: "/supplier/supplierList",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 9, class: "", icon: faAddressCard,
      name: "Sobre",
      link: "/about/about",
      visibleProfiles: ["User", "Admin"]
    },
    {
      submenus: [], id: 10, class: "", icon: faCogs,
      name: "Configurações",
      link: "/configuration/configuration",
      visibleProfiles: ["User", "Admin"]
    },
  ]

  constructor(
  ) { }

  ngAfterViewInit(): void {
    let activeMenu = document.getElementById(this.menuId);
    activeMenu?.classList.add('active');
    if (activeMenu!.parentElement?.tagName! == 'LI') {
      activeMenu!.parentElement?.classList.add('active');
    }
    activeMenu!.parentElement?.parentElement?.classList.remove('hidden-submenu');
  }

  ngOnInit(): void {
  }

  onChangeActive(menu: string) {
    let activeMenu = document.getElementById(menu);
    let desactiveMenu = document.getElementsByClassName('active');

    if (activeMenu?.children[0].childElementCount! > 1) {
      let removeSubMenu = document.getElementsByClassName('submenu');
      if (removeSubMenu[0] != null || removeSubMenu[0] != undefined) {
        removeSubMenu[0]?.children[0].children[0].children[1].classList.add('hidden-arrow-menus');
        removeSubMenu[0]?.children[0].children[1].classList.add('hidden-submenu');

        removeSubMenu[0]?.classList.remove('submenu');
      }
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
        } else {

        }
      }
      activeMenu?.classList.add('active');
    }
    this.previousMenuId = menu;
  }
}
