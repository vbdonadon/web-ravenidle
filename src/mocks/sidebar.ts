type SidebarMenu = {
  name: string;
  url: string;
  icon: string;
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
        url: '/game/character',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Archetypes',
        url: '/game/archetypes',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Inventory',
        url: '/game/inventory',
        icon: '/icons/character-icon.svg'
      }
    ]
  },
  {
    title: "Exploration",
    menu: [
      {
        name: 'Creatures',
        url: '/game/creatures',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Dungeons',
        url: '/game/dungeons',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Tradepacks',
        url: '/game/tradepacks',
        icon: '/icons/character-icon.svg'
      }
    ]
  },
  {
    title: "Shop",
    menu: [
      {
        name: 'Equipaments',
        url: '/game/equipaments',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Weapons',
        url: '/game/weapons',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Potions',
        url: '/game/potions',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Cassino',
        url: '/game/cassino',
        icon: '/icons/character-icon.svg'
      }
    ]
  }
]

export default data;
