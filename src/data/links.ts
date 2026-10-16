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
]

export const connectLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/trenton_michael/',
    image:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/3840px-Instagram_logo_2016.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
    style: { filter: 'invert(0)' },
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@trenton_michael',
    image:
      'https://static.freepnglogo.com/images/all_img/tik-tok-logo-png-80f7.png',
    style: { filter: 'invert(0)' },
    
    
  },
    {
    name: 'YouTube',
    url: 'https://www.youtube.com/@trenton_michael',
    image: '/youtube_logo.webp',
  },
    {
      name: 'Twitter',
      url: 'https://x.com/trntnmchl',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/960px-Logo_of_Twitter.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220821125553',
      
    },    
    {
    name: 'Threads',
    url: 'https://www.threads.com/@trenton_michael',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Threads_%28app%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  },
      {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/trntnmchl?share_id=BjmXgoTXQY27eOA6wQuVgQ&locale=en_US',
    image: 'https://store-images.s-microsoft.com/image/apps.7973.14208673485779370.88f23073-7e41-4921-aef9-76103983bd31.9d2f4ec1-724a-4efd-8a3b-1068ecdd2513',
  }
]

export const carouselImages = [
  'IMG_6529.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D9D334B1A%2D45D9%2D4BB6%2DA5530B764382CCEE%2D%2D0%2D%2D1644032%2D%2DIMG0276.jpg',
  'IMG_6521.jpg',
  'IMG_6523.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D030C94BD%2DF16D%2D4919%2D8DFCCB505623164A%2D%2D0%2D%2D1619981%2D%2DIMG4610.jpg',
  'IMG_6528.jpg',
  'IMG_6520.jpg',  
  '/see-you-in-june-pink.webp',
  'BLAXAX.jpg',
  'CLOSEUP.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D6BE667B0%2DFE51%2D4016%2DBA8957616730ABAC%2D%2D1618613177348%2D%2D0F307CB7D8B8458998EAE4B5085ACE51.jpg',
  '100_1163.jpg',
  'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D2137856%2D%2D99D8B48E%2D1DE5%2D4F7A%2D882D1E1E6C2E6ACA%2D%2D0%2D%2D8779050%2D%2D18diamondsfake.jpg',
    '100_1153.jpg',
]