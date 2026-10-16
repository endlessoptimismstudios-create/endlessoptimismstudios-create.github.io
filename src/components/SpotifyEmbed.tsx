export default function SpotifyEmbed() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: '12px', border: '0', marginBottom: '12px' }}
        src="https://open.spotify.com/embed/album/3pArrbrrKeqEjU14HW6d14?utm_source=generator&si=270c927139a940ad"
        width="100%"
        height="152"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
