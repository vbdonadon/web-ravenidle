type SidebarMenu = {
  name: string;
  url: string;
}

export type SidebarProps = {
  title: string;
  menu: SidebarMenu[]
}

const data: SidebarProps[] = [
  {
    title: "My account",
    menu: [
      {
        name: 'Character',
        url: '/character'
      },
      {
        name: 'Archetypes',
        url: '/archetypes'
      },
      {
        name: 'Inventory',
        url: '/inventory'
      }
    ]
  },
  {
    title: "Exploration",
    menu: [
      {
        name: 'Creatures',
        url: '/creatures'
      },
      {
        name: 'Dungeons',
        url: '/dungeons'
      },
      {
        name: 'Tradepacks',
        url: '/tradepacks'
      }
    ]
  },
  {
    title: "Shop",
    menu: [
      {
        name: 'Equipaments',
        url: '/equipaments'
      },
      {
        name: 'Weapons',
        url: '/weapons'
      },
      {
        name: 'Potions',
        url: '/potions'
      },
      {
        name: 'Cassino',
        url: '/cassino'
      }
    ]
  }
]

export default data;