export default function Footer() {
  return (
    <footer style={{ flexShrink: 0 }}>
      <span>© {new Date().getFullYear()}, Built with &#10084; By </span>
      <a href="https://github.com/duvet86">Luca</a>
    </footer>
  );
}
