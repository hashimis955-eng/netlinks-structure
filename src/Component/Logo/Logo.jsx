import image from "../../assets/afghanistan-payments-system.webp"
import image1 from "../../assets/aga-khan-foundation.webp"
import image2 from "../../assets/akdn.webp"
import image3 from "../../assets/chemonics.webp"
import image4 from "../../assets/da-afghanistan-bank.webp"
import image5 from "../../assets/etisalat.webp"
import image6 from "../../assets/ifc.webp"
import image7 from "../../assets/siemens.webp"
import image8 from "../../assets/tetra-tech.webp"
import image9 from "../../assets/un-women.webp"
import image10 from "../../assets/undp.webp"
import image11 from "../../assets/unesco.webp"
import image12 from "../../assets/usaid.webp"
import "./Logo.css"

const logos = [
  { src: image, alt: "Afghanistan Payments System" },
  { src: image1, alt: "Aga Khan Foundation" },
  { src: image2, alt: "AKDN" },
  { src: image3, alt: "Chemonics" },
  { src: image4, alt: "Da Afghanistan Bank" },
  { src: image5, alt: "Etisalat" },
  { src: image6, alt: "IFC" },
  { src: image7, alt: "Siemens" },
  { src: image8, alt: "Tetra Tech" },
  { src: image9, alt: "UN Women" },
  { src: image10, alt: "UNDP" },
  { src: image11, alt: "UNESCO" },
  { src: image12, alt: "USAID" },
]

export default function Logo() {
  return (
    <div className="logo-marquee" role="region" aria-label="Partner logos">
      <div className="logo-track">
        {[0, 1].map((group) => (
          <div
            className="logo-group"
            key={group}
            aria-hidden={group === 1}
          >
            {logos.map(({ src, alt }) => (
              <img src={src} alt={group === 0 ? alt : ""} key={alt} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
