import { Result } from '@/app/(home)/components/types'
import { defaultHeader } from '@/configs'

export const HomeService = {
 fetchCarousel: async () => {
  const request = {
    ...{ next: { revalidate: 180 } },
    method: 'GET',
    headers: {
      ...defaultHeader
    }
  }

  const url = `https://content.sbt.com.br/api/medias?limit=10&idsitearea=2091&orderby=ordem&sort=asc`

  try {
    const response = await fetch(url, {...request})

    const responseData = await response.json()

    return {
      results: responseData.results as Result[]
    }
  }
  catch (err){
    throw new Error(`${err}`)
  }
 }
}