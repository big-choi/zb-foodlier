import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import DetailMainItem from '../../components/recipe/detail/DetailMain'
import DetailIngredients from '../../components/recipe/detail/DetailIngredients'
import DetailProcedure from '../../components/recipe/detail/DetailProcedure'
import RecipeReviewList from '../../components/recipe/detail/review/RecipeReviewList'
import axiosInstance from '../../utils/FetchCall'
import { Recipe } from '../../constants/Interfaces'
import DetailEditDelete from '../../components/recipe/detail/DetailEditDelete'
import RecipeComment from '../../components/recipe/detail/comment/RecipeComment'

export const DetailContainer = styled.div`
  width: 100%;
  padding: 0 2%;
`

const RecipeDetailPage = () => {
  const { id } = useParams()
  const localProfile = localStorage.getItem('PROFILE')
  const profile = localProfile ? JSON.parse(localProfile) : {}

  const [isLoadng, setIsLoading] = useState(true)
  const [recipeData, setRecipeData] = useState<Recipe | undefined>()

  const getRecipe = async () => {
    try {
      // 현재 List 조회 API X -> 추후 id 받아오는 형식으로 수정 필요
      const res = await axiosInstance.get(`/api/recipe/${id}`)

      if (res.status === 200) {
        setRecipeData(res.data)
        console.log(res.data)
        setIsLoading(false)
      }
    } catch (error) {
      // 추후 Error code를 통한 에러 처리 구현 예정
      console.log(error)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])

  // 로딩 component 구현 필요
  if (isLoadng) return null

  return (
    <>
      <Header />

      <DetailContainer>
        {recipeData?.memberId === profile.myMemberId && (
          <DetailEditDelete recipeId={recipeData?.recipeId || 0} />
        )}
        <DetailMainItem recipe={recipeData} />
        <DetailIngredients ingredients={recipeData?.recipeIngredientDtoList} />
        <DetailProcedure detail={recipeData?.recipeDetailDtoList} />
        <RecipeComment recipeId={recipeData?.recipeId || 0} />
        <RecipeReviewList recipeId={recipeData?.recipeId || 0} />
      </DetailContainer>

      <BottomNavigation />
    </>
  )
}

export default RecipeDetailPage
