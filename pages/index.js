import NavBar from "../components/nav-bar"
import HeroSection from "../components/hero-section"
import StoriesSection from "../components/stories-section"
import GallerySection from "../components/gallery-section"
import PanaromicSection from "../components/panaromic-section"
import CustomerReviewSection from "../components/customer-review-section"
import Footer from "../components/footer"
import styles from "./index.module.css"

const DestinationLocofy = () => {
  return (
    <div className={styles.destinationLocofy}>
      <NavBar />
      <HeroSection />
      <div className={styles.attractionSection}>
        <h1 className={styles.sectionTitle}>Top Attractions in Paris</h1>
        <div className={styles.container}>
          <div className={styles.attractionCards}>
            <div className={styles.card}>
              <img className={styles.image1Icon} alt="" src="/image@2x.png" />
              <div className={styles.vstack}>
                <div className={styles.eiffelTower}>Eiffel Tower</div>
                <div className={styles.description1}>
                  Built by Gustave Eiffel for the 1889 World’s Fair, Eiffel Tower became the world's tallest man-made
                  structure until the Chrysler Building
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img className={styles.image1Icon} alt="" src="/image1@2x.png" />
              <div className={styles.vstack}>
                <div className={styles.eiffelTower}>Arc de Triomphe</div>
                <div className={styles.description1}>
                  The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the
                  western end of the Champs-Élysées at the centre of Place Charles de Gaulle.
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <img className={styles.image1Icon} alt="" src="/image2@2x.png" />
              <div className={styles.vstack}>
                <div className={styles.eiffelTower}>Louvre Museum</div>
                <div className={styles.description1}>
                  The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic landmark in
                  Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the
                  Venus de Milo.
                </div>
              </div>
            </div>
          </div>
          <img className={styles.mapViewIcon} alt="" src="/map-view@2x.png" />
        </div>
      </div>
      <div className={styles.attractionSection}>
        <h1 className={styles.sectionTitle}>General Info</h1>
        <div className={styles.container1}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.contentWrapper}>
            <div className={styles.paragraph}>
              <div className={styles.theCapitalCity}>
                The capital city of France needs no introduction given its reputation for being the world's most
                romantic city. The Eiffel Tower has appeared in too many movies and shows to count, while the Louvre
                Museum was even the main attraction in the popular movie series, The Da Vinci Code, and is also home to
                one of the world's most famous artworks - the Mona Lisa. Landmarks aside, the city is home to locals
                known for being fashion forward. Many big names such as Chanel, Hermes, and Louis Vuitton have their
                roots in the city and continue to shape the global fashion scene.
              </div>
              <div className={styles.divider} />
            </div>
            <div className={styles.timeAndCurrency}>
              <div className={styles.time}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.vstack3}>
                  <div className={styles.bestTimeTo}>GMT +01:00</div>
                  <div className={styles.hoursBehind}>7 hours behind</div>
                </div>
              </div>
              <div className={styles.time}>
                <img className={styles.icon} alt="" src="/icon1.svg" />
                <div className={styles.vstack3}>
                  <div className={styles.bestTimeTo}>Currency</div>
                  <div className={styles.hoursBehind}>Euro</div>
                </div>
              </div>
              <div className={styles.time}>
                <img className={styles.icon} alt="" src="/icon2.svg" />
                <div className={styles.vstack3}>
                  <div className={styles.bestTimeTo}> Best Time to Visit</div>
                  <div className={styles.hoursBehind}>Jul</div>
                </div>
              </div>
            </div>
            <div className={styles.weatherWrapper}>
              <div className={styles.divider} />
              <div className={styles.temperatureWrapper}>
                <div className={styles.vstack6}>
                  <div className={styles.paris}>Paris</div>
                  <div className={styles.march152023}>March 15, 2023</div>
                </div>
                <div className={styles.temperature}>
                  <div className={styles.unitToggle}>
                    <div className={styles.ferenheit}>
                      <div className={styles.bestTimeTo}>ºF</div>
                    </div>
                    <div className={styles.celcius}>
                      <div className={styles.bestTimeTo}>ºC</div>
                    </div>
                  </div>
                  <div className={styles.div}>26º</div>
                </div>
              </div>
              <div className={styles.forcastWrapper}>
                <div className={styles.hourlyForcast}>
                  <img className={styles.icon} alt="" src="/icon3.svg" />
                  <div className={styles.vstack3}>
                    <div className={styles.div1}>26º</div>
                    <div className={styles.now}>NOW</div>
                  </div>
                </div>
                <div className={styles.hourlyForcast}>
                  <img className={styles.icon} alt="" src="/icon3.svg" />
                  <div className={styles.vstack3}>
                    <div className={styles.div1}>26º</div>
                    <div className={styles.now}>NOW</div>
                  </div>
                </div>
                <div className={styles.hourlyForcast}>
                  <img className={styles.icon} alt="" src="/icon3.svg" />
                  <div className={styles.vstack3}>
                    <div className={styles.div1}>26º</div>
                    <div className={styles.now}>NOW</div>
                  </div>
                </div>
                <div className={styles.hourlyForcast}>
                  <img className={styles.icon} alt="" src="/icon3.svg" />
                  <div className={styles.vstack3}>
                    <div className={styles.div1}>26º</div>
                    <div className={styles.now}>NOW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredSection}>
        <div className={styles.container2}>
          <img className={styles.imageIcon1} alt="" src="/image4@2x.png" />
          <div className={styles.contentWrapper1}>
            <div className={styles.vstack11}>
              <div className={styles.featuredReading}>Featured Reading</div>
              <div className={styles.publishedJanuary3}>Published January 3, 2023 | 9 min read</div>
            </div>
            <div className={styles.title}>The 10 best parks in Parisasda asdasdasdas...</div>
            <div className={styles.author}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.vstack}>
                <div className={styles.juanaLewis}>Juana Lewis</div>
                <div className={styles.writer}>Writer</div>
              </div>
            </div>
            <div className={styles.withIncredibleMuseums}>
              With incredible museums, shops and restaurants, it’s easy to forget that one of the best ways to enjoy
              Paris is outside. Here are the best parks in Paris.
            </div>
            <div className={styles.textButton}>
              <div className={styles.readNow}>Read now</div>
            </div>
          </div>
        </div>
      </div>
      <GallerySection />
      <PanaromicSection />
      <CustomerReviewSection />
      <div className={styles.nearbySection}>
        <div className={styles.bestTimeTo}>Nearby Destinations</div>
        <div className={styles.badalonaParent}>
          <div className={styles.badalona}>Badalona</div>
          <div className={styles.badalona}>Terassa</div>
          <div className={styles.badalona}>Palma de Mallorca</div>
          <div className={styles.badalona}>Toulouse</div>
          <div className={styles.badalona}>Cornelia</div>
          <div className={styles.badalona}>Zaragoza</div>
          <div className={styles.badalona}>Montpelier</div>
          <div className={styles.badalona}>Valencia</div>
          <div className={styles.badalona}>Marseille</div>
          <div className={styles.badalona}>Montornes Del Valles</div>
          <div className={styles.badalona}>Marseille</div>
          <div className={styles.badalona}>Montornes Del Valles</div>
          <div className={styles.badalona}>Terassa</div>
          <div className={styles.badalona}>Valencia</div>
          <div className={styles.badalona}>Toulouse</div>
          <div className={styles.badalona}>Badalona</div>
          <div className={styles.badalona}>Montpelier</div>
          <div className={styles.badalona}>Zaragoza</div>
          <div className={styles.badalona}>Cornelia</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DestinationLocofy
