declare interface Anime {
  name: string
  media: 'film' | 'série'
  note: number
  seasons: number
  episodes: number
  tags: string[]
  comments: string[]
  synopsis: string
  image: string
  id: number
}