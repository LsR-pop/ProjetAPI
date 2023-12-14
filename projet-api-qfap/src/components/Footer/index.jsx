function Footer() {
  return (
    <footer className="bg-slate-300 mt-24">
      <div className="flex flex-col">
        <p className="m-6 self-center">© 2023 - QFAP</p>
        <div className="flex flex-row justify-between p-4 m-4">
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
