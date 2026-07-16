import type { CSSProperties } from 'react'

export const styles: Record<string, CSSProperties> = {
  container: {
    fontFamily: 'sans-serif',
    backgroundColor: '#8B0000',
    margin: '0 auto',
    maxWidth: '700px',
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflowX: 'hidden',
  },
  title: {
    marginTop: '0px',
    marginBottom: '0px',
    width: '100%',
    wordBreak: 'break-word',
    fontSize: '2.8rem',
    lineHeight: 1.1,
    overflowWrap: 'break-word',
  },
  header: {
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  marquee: {
    width: '100%',
    maxWidth: '600px',
    overflow: 'hidden',
  },
  link: {
    padding: 8,
    background: 'transparent',
    textDecoration: 'none',
    fontWeight: 700,
    transition: 'background 0.2s',
  },
  video: {
    marginBottom: 20,
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: 8,
  },
}
