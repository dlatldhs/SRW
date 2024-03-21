// 스크롤 다 내리면 나오게
// Footer.js
const Footer = () => {
    return (
      <footer style={footerStyle}>
        <div style={footerContent}>
          <p>문의: example@example.com</p>
          <p>© 2024 회사명. 모든 권리 보유.</p>
        </div>
      </footer>
    );
  }
  
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px 0"
  };
  
  const footerContent = {
    maxWidth: "1200px",
    margin: "0 auto"
  };
  
  export default Footer;
  