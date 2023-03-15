import { SidebarProps } from "@/app/game/data";
import Link from "next/link";

type TheSidebarProps = {
  data: SidebarProps[]
}

import * as S from './styles'

const TheSidebar = ({ data }: TheSidebarProps) => {
  

  return (
    <S.Container>
      <S.Logo 
        src="/ravenidle-logo.png" 
        alt="RavenIdle Logo" 
      />

      <S.List>
        {data.map((menu, id) => (
          <>
            <S.ListItem key={id}>{menu.title}</S.ListItem>
            <S.Sublist>
              {menu.menu.map((submenu, id) => (
                <S.SublistItem key={id}>
                  <Link href={submenu.url}>{submenu.name}</Link>
                </S.SublistItem>
              ))}
            </S.Sublist>
          </>
        ))}
      </S.List>
    </S.Container>
  );
}

export default TheSidebar;