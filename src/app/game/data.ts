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
        url: '/game/character'
      },
      {
        name: 'Archetypes',
        url: '/game/archetypes'
      },
      {
        name: 'Inventory',
        url: '/game/inventory'
      }
    ]
  },
  {
    title: "Exploration",
    menu: [
      {
        name: 'Creatures',
        url: '/game/creatures'
      },
      {
        name: 'Dungeons',
        url: '/game/dungeons'
      },
      {
        name: 'Tradepacks',
        url: '/game/tradepacks'
      }
    ]
  },
  {
    title: "Shop",
    menu: [
      {
        name: 'Equipaments',
        url: '/game/equipaments'
      },
      {
        name: 'Weapons',
        url: '/game/weapons'
      },
      {
        name: 'Potions',
        url: '/game/potions'
      },
      {
        name: 'Cassino',
        url: '/game/cassino'
      }
    ]
  }
]

export default data;