import axios, { AxiosError } from 'axios'
import { getCookie } from './Cookies'

// TODO: Localhost 대신 EC2 주소로 변경 시 CORS 에러 발생 이슈 논의 필요
// const API_BASE_URL =
// 'http://ec2-15-165-55-217.ap-northeast-2.compute.amazonaws.com'
// const API_BASE_URL = 'http://localhost:8080'
// 서버에서 받아온 안전한 accessToken 사용
const API_ACCESS_TOKEN = getCookie('accessToken')
const API_REFRESH_TOKEN = getCookie('refreshToken')

const axiosInstance = axios.create({
  // baseURL 빼고 작업해야 CORS
  // baseURL: API_BASE_URL,
  headers: {
    // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGFlaHFAZ21haWwuY29tIiwianRpIjoiMSIsInJvbGVzIjpbIlJPTEVfQ0hFRiJdLCJ0eXBlIjoiQVQiLCJpYXQiOjE3MjkwMzMwMjQsImV4cCI6MTcyOTA3NjIyNH0.H1nMVZGcjlcMwkSmjkSghz3EImVR5quDtwrRhXfSxZmASkDkR4ZHyQn6ZZN5LYWRM4Ent30WSaploceO2mb-Yg`,
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    RefreshToken: `Bearer ${API_REFRESH_TOKEN}`,
  },
  withCredentials: true,
})

export async function reissueToken() {
  try {
    const response = await axiosInstance.post('/auth/reissue', null, {
      headers: {
        RefreshToken: `Bearer ${API_REFRESH_TOKEN}`,
      },
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    // Handle errors here
    throw axiosError
  }
}

export async function postFormData(url: string, data: any) {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json;charset=UTF-8',
      },
    })
    return response
  } catch (error) {
    const axiosError = error as AxiosError
    // Handle errors here
    throw axiosError
  }
}

export async function putFormData(url: string, data: any) {
  try {
    const response = await axiosInstance.put(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json;charset=UTF-8',
      },
    })
    return response
  } catch (error) {
    const axiosError = error as AxiosError
    // Handle errors here
    throw axiosError
  }
}

export default axiosInstance
