import Link from "next/link";

import styles from './styles.module.css'

const TheSidebar = () => {
  return (
    <aside id={styles.sidebar}>
      <img src="/ravenidle-logo.svg" alt="RavenIdle Logo" />

      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__list__title}>My account</li>
        <li>
          <ul>
            <li>
              <Link href="/character">Character</Link>
            </li>
            <li>
              <Link href="/archetypes">Archetypes</Link>
            </li>
            <li>
              <Link href="/inventory">Inventory</Link>
            </li>
          </ul>
        </li>

        <li className={styles.sidebar__list__title}>Exploration</li>
        <li>
          <ul>
            <li>
              <Link href="/creatures">Creatures</Link>
            </li>
            <li>
              <Link href="/dungeons">Dungeons</Link>
            </li>
            <li>
              <Link href="/tradepacks">Tradepacks</Link>
            </li>
          </ul>
        </li>

        <li className={styles.sidebar__list__title}>Shop</li>
        <li>
          <ul>
            <li>
              <Link href="/equipaments">Equipaments</Link>
            </li>
            <li>
              <Link href="/weapons">Weapons</Link>
            </li>
            <li>
              <Link href="/potions">Potions</Link>
            </li>
            <li>
              <Link href="/cassino">Cassino</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default TheSidebar;