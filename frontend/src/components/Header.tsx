import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../public/images/foodlier_logo.png'
import useIcon from '../hooks/useIcon'
import { palette } from '../constants/Styles'
import * as S from '../styles/Header.styled'
import MoSearch from './search/MoSearch'
import SideNotification from './SideNotification'

const Header = () => {
  const navigate = useNavigate()
  const { IcSearch } = useIcon()

  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    // 토글이 열려있을 경우 화면 클릭 시 토글 닫히게 설정
    const handleOutsideClose = () => {
      if (isToggle) {
        setIsToggle(false)
      }
    }

    document.addEventListener('click', handleOutsideClose, { capture: true })

    return () => document.removeEventListener('click', handleOutsideClose)
  }, [isToggle])

  // 모바일 검색 - 토글
  const [isMoSearchOpen, setIsMoSearchOpen] = useState(false)

  const HEADER_MENU_LIST = [
    {
      title: '꿀조합',
      navigate: 'recipe',
    },
    { title: '냉마카세', navigate: 'refrigerator' },
    { title: '채팅', navigate: 'chat' },
    { title: '마이페이지', navigate: 'my' },
  ]

  const navigateTo = (pageName: string) => {
    navigate(`/${pageName}`)
  }

  return (
    <S.Container>
      <S.LogoButton onClick={() => navigateTo('')}>
        <S.Logo src={logo} alt="로고 이미지" />
      </S.LogoButton>
      {/* mobile */}
      <S.WrapIcon>
        <S.Icon onClick={() => navigate('/recipe')}>
          <IcSearch size={3} color={palette.textPrimary} />
        </S.Icon>
      </S.WrapIcon>

      {/* web */}
      <S.WrapMenu>
        {HEADER_MENU_LIST.map(item => (
          <S.Menu key={item.title} onClick={() => navigateTo(item.navigate)}>
            {item.title}
          </S.Menu>
        ))}
      </S.WrapMenu>
      {isMoSearchOpen && <MoSearch setIsMoSearchOpen={setIsMoSearchOpen} />}
      <SideNotification />
    </S.Container>
  )
}

export default Header
