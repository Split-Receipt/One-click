import { useTranslation } from "react-i18next";
import Screen from "./Screen.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Action from "./Action.jsx";
import Overview from "./Overview.jsx";
import InfoBlock from "./InfoBlock.jsx";
import Features from "./Features.jsx";
import Tariffs from "./Tariffs.jsx";

function App() {
  const { t } = useTranslation();

  const info = [
    {
      title: t('products.qrPage.title'),
      possibilities: {
        title: t('products.qrPage.possibilities.title'),
        text: t('products.qrPage.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.qrPage.features.1'),
          t('products.qrPage.features.2'),
          t('products.qrPage.features.3'),
          t('products.qrPage.features.4'),
          t('products.qrPage.features.5'),
        ],
      },
      for: {
        text: [
          t('products.qrPage.for.1'),
          t('products.qrPage.for.2'),
          t('products.qrPage.for.3'),
          t('products.qrPage.for.4'),
        ],
      },
      image: "/img/qr-page-f.webp",
    },
    {
      title: t('products.qrMenu.title'),
      possibilities: {
        title: t('products.qrMenu.possibilities.title'),
        text: t('products.qrMenu.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.qrMenu.features.1'),
          t('products.qrMenu.features.2'),
          t('products.qrMenu.features.3'),
          t('products.qrMenu.features.4'),
          t('products.qrMenu.features.5'),
          t('products.qrMenu.features.6'),
        ],
      },
      for: {
        text: [
          t('products.qrMenu.for.1'),
          t('products.qrMenu.for.2'),
          t('products.qrMenu.for.3'),
          t('products.qrMenu.for.4'),
        ],
      },
      image: "/img/qr-menu-f.webp",
    },
    {
      title: t('products.nfcCard.title'),
      possibilities: {
        title: t('products.nfcCard.possibilities.title'),
        text: t('products.nfcCard.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.nfcCard.features.1'),
          t('products.nfcCard.features.2'),
          t('products.nfcCard.features.3'),
          t('products.nfcCard.features.4'),
          t('products.nfcCard.features.5'),
        ],
      },
      for: {
        text: [
          t('products.nfcCard.for.1'),
          t('products.nfcCard.for.2'),
          t('products.nfcCard.for.3'),
          t('products.nfcCard.for.4'),
        ],
      },
      image: "/img/nfc-card-f.webp",
    },
    {
      title: t('products.qrFile.title'),
      possibilities: {
        text: [
          t('products.qrFile.possibilities.description.1'),
          t('products.qrFile.possibilities.description.2'),
          t('products.qrFile.possibilities.description.3'),
          t('products.qrFile.possibilities.description.4'),
          t('products.qrFile.possibilities.description.5'),
        ],
      },
      features: {
        text: [
          t('products.qrFile.features.1'),
          t('products.qrFile.features.2'),
          t('products.qrFile.features.3'),
          t('products.qrFile.features.4'),
        ],
      },
      for: {
        text: [
          t('products.qrFile.for.1'),
          t('products.qrFile.for.2'),
          t('products.qrFile.for.3'),
          t('products.qrFile.for.4'),
        ],
      },
      image: "/img/qr-file-f.webp",
    },
    {
      title: t('products.digitalInvitation.title'),
      possibilities: {
        text: [
          t('products.digitalInvitation.possibilities.1'),
          t('products.digitalInvitation.possibilities.2'),
          t('products.digitalInvitation.possibilities.3'),
          t('products.digitalInvitation.possibilities.4'),
          t('products.digitalInvitation.possibilities.5'),
          t('products.digitalInvitation.possibilities.6'),
        ]
      },
      features: {
        text: [
          t('products.digitalInvitation.features.1'),
          t('products.digitalInvitation.features.2'),
          t('products.digitalInvitation.features.3'),
          t('products.digitalInvitation.features.4'),
        ],
      },
      for: {
        text: [
          t('products.digitalInvitation.for.1'),
          t('products.digitalInvitation.for.2'),
          t('products.digitalInvitation.for.3'),
          t('products.digitalInvitation.for.4'),
          t('products.digitalInvitation.for.5'),
        ],
      },
      image: "/img/invitation-f.webp",
    },
    {
      title: t('products.portfolio.title'),
      possibilities: {
        text: t('products.portfolio.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.portfolio.features.1'),
          t('products.portfolio.features.2'),
          t('products.portfolio.features.3'),
          t('products.portfolio.features.4'),
          t('products.portfolio.features.5'),
          t('products.portfolio.features.6'),
        ],
      },
      for: {
        text: [
          t('products.portfolio.for.1'),
          t('products.portfolio.for.2'),
          t('products.portfolio.for.3'),
          t('products.portfolio.for.4'),
          t('products.portfolio.for.5'),
        ],
      },
      image: "/img/portfolio-f.webp",
    },
    {
      title: t('products.landing.title'),
      possibilities: {
        text: t('products.landing.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.landing.features.1'),
          t('products.landing.features.2'),
          t('products.landing.features.3'),
          t('products.landing.features.4'),
          t('products.landing.features.5'),
        ],
      },
      for: {
        text: [
          t('products.landing.for.1'),
          t('products.landing.for.2'),
          t('products.landing.for.3'),
          t('products.landing.for.4'),
          t('products.landing.for.5'),
        ],
      },
      image: "/img/landing-f.webp",
    },
    {
      title: t('products.corporatePresentation.title'),
      possibilities: {
        text: t('products.corporatePresentation.possibilities.description.1'),
      },
      features: {
        text: [
          t('products.corporatePresentation.features.1'),
          t('products.corporatePresentation.features.2'),
          t('products.corporatePresentation.features.3'),
          t('products.corporatePresentation.features.4'),
          t('products.corporatePresentation.features.5'),
        ],
      },
      for: {
        text: [
          t('products.corporatePresentation.for.1'),
          t('products.corporatePresentation.for.2'),
          t('products.corporatePresentation.for.3'),
          t('products.corporatePresentation.for.4'),
          t('products.corporatePresentation.for.5'),
        ],
      },
      image: "/img/presentation-f.webp",
    },
  ];

  return (
    <>
      <Header />
      <Screen />
      <Overview />
      {info.map((item, index) => (
        <InfoBlock key={index} title={item.title} info={item} />
      ))}
      <Features />
      <Tariffs />
      <Action />
      <Footer />
    </>
  );
}

export default App;
