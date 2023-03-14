import TheSidebar from "@/components/TheSidebar"

import styles from './styles.module.css';

type GameLayoutProps = {
  children: React.ReactNode
}

const GameLayout = ({
  children
}: GameLayoutProps) => {


  return (  
    <>
      <TheSidebar />
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default GameLayout;