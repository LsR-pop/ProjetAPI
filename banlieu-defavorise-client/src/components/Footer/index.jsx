function Footer() {
  return (
    <footer>
      <div className="flex flex-col m-auto">
        <p>© 2023 - QFAP</p>
        <div className="flex flex-row justify-between">
          <a href="https://ecole-du-digital.com/">
            <img src="./icons/logoEcole.png" alt="" />
          </a>
          <a href="https://www.paris.fr/quefaire">
            <img src="./icons/logoParisMairie.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
