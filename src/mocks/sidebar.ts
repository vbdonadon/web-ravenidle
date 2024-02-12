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
        url: '/',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Archetypes',
        url: '/archetypes',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Inventory',
        url: '/inventory',
        icon: '/icons/character-icon.svg'
      }
    ]
  },
  {
    title: "Exploration",
    menu: [
      {
        name: 'Creatures',
        url: '/creatures',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Dungeons',
        url: '/dungeons',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Tradepacks',
        url: '/tradepacks',
        icon: '/icons/character-icon.svg'
      }
    ]
  },
  {
    title: "Shop",
    menu: [
      {
        name: 'Equipaments',
        url: '/equipaments',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Weapons',
        url: '/weapons',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Potions',
        url: '/potions',
        icon: '/icons/character-icon.svg'
      },
      {
        name: 'Cassino',
        url: '/cassino',
        icon: '/icons/character-icon.svg'
      }
    ]
  }
]

export default data;
