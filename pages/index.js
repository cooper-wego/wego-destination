import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import NavBar from "../components/nav-bar"

export default function DestinationLocofy() {
  const { t } = useTranslation()
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>{t("hero.Welcome to")}</div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
