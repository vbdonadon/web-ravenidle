'use client'

import Link from "next/link";

import { SidebarProps } from "@/mocks/sidebar";
import BaseIcons from '@/components/BaseIcons'

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
        {data.map((menu, menuId) => (
          <div key={menuId}>
            <S.ListItem>{menu.title}</S.ListItem>
            <S.Sublist>
              {menu.menu.map((submenu, submenuId) => (
                <S.SublistItem key={submenuId}>
                  <Link href={submenu.url}>
                    <S.IconWrapper>
                      <BaseIcons name="IconCharacter" size="small"/>
                    </S.IconWrapper>
                    {submenu.name}
                  </Link>
                </S.SublistItem>
              ))}
            </S.Sublist>
          </div>
        ))}
      </S.List>
    </S.Container>
  );
}

export default TheSidebar;