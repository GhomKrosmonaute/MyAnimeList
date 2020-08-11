declare interface Anime {
  name: string
  media: 'film' | 'série'
  note: number
  saisons: number
  épisodes: number
  tags: string[]
  comments: string[]
  synopsis: string
  image: string
  id: number
}