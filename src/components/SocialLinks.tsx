import type { CSSProperties } from 'react'
import type { SocialLink } from '../data/links'
import { styles } from '../styles'

type SocialLinksProps = {
  links: SocialLink[]
  className?: string
  linkClassName?: string
  style?: CSSProperties
}

export function SocialLinks({
  links,
  className,
  linkClassName = 'link',
  style,
}: SocialLinksProps) {
  return (
    <div className={`links ${className ?? ''}`.trim()} style={style}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={link.style ? { ...styles.link, ...link.style } : styles.link}
          className={link.className ?? linkClassName}
        >
          <img src={link.image} alt={link.name} style={{ height: 48 }} />
        </a>
      ))}
    </div>
  )
}
