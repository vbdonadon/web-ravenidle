"use client"

import TheSidebar from "@/components/TheSidebar"

import mock from "./data";

import * as S from './styles';

type GameLayoutProps = {
  children: React.ReactNode
}

const GameLayout = ({
  children
}: GameLayoutProps) => {
  return (  
    <>
      <TheSidebar data={mock} />
      <S.Container>{children}</S.Container>
    </>
  );
}

export default GameLayout;