import * as S from './styles';

const BaseAttributes = () => {
  return (
    <S.Container>
      <S.Title>Attributes</S.Title>
      <S.Attributes>
        <S.Attribute>
          Might

          <S.Buttons>
            <S.Button>
              +
            </S.Button>

            <S.Button>
              -
            </S.Button>
          </S.Buttons>
        </S.Attribute>

        <S.Attribute>
          Intelligence

          <S.Buttons>
            <S.Button>
              +
            </S.Button>

            <S.Button>
              -
            </S.Button>
          </S.Buttons>
        </S.Attribute>

        <S.Attribute>
          Dexterity

          <S.Buttons>
            <S.Button>
              +
            </S.Button>

            <S.Button>
              -
            </S.Button>
          </S.Buttons>
        </S.Attribute>

        <S.Attribute>
          Wisdom

          <S.Buttons>
            <S.Button>
              +
            </S.Button>

            <S.Button>
              -
            </S.Button>
          </S.Buttons>
        </S.Attribute>
      </S.Attributes>
    </S.Container>
  )
}

export default BaseAttributes