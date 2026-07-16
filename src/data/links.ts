import type { CSSProperties } from 'react'

export type SocialLink = {
  name: string
  url: string
  image: string
  style?: CSSProperties
  className?: string
}

export const listenLinks: SocialLink[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/2J42S3cRKTqzz0upSLjsru',
    image: '/spotify_logo.webp',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/trenton-michael/1538264727',
    image: '/red_apple.webp',
  },
  {
    name: 'Bandcamp',
    url: 'https://trentonmichael.bandcamp.com/',
    image: '/bandcamp-logo.svg',
    className: 'invert-on-dark',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/trentonmichael',
    image: '/soundcloud.svg',
    className: 'invert-on-dark',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@trenton_michael',
    image: '/youtube_logo.webp',
  },
]

export const connectLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/trenton_michael/',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png',
    style: { filter: 'invert(0)' },
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@trenton_michael',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/031/737/223/small/tiktok-logo-tiktok-app-social-media-icons-free-png.png',
    style: { filter: 'invert(0)' },
  },
]

export const carouselImages = [
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D030C94BD%2DF16D%2D4919%2D8DFCCB505623164A%2D%2D0%2D%2D1619981%2D%2DIMG4610.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D6BE667B0%2DFE51%2D4016%2DBA8957616730ABAC%2D%2D1618613177348%2D%2D0F307CB7D8B8458998EAE4B5085ACE51.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D9D334B1A%2D45D9%2D4BB6%2DA5530B764382CCEE%2D%2D0%2D%2D1644032%2D%2DIMG0276.jpg',
  '/see-you-in-june-pink.webp',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D99D8B48E%2D1DE5%2D4F7A%2D882D1E1E6C2E6ACA%2D%2D0%2D%2D8779050%2D%2D18diamondsfake.jpg',
]
