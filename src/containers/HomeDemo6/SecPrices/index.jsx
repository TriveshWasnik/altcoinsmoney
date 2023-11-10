import SectionHeading from "./SectionHeading"
import PricingItem from "./PricingItem"

const SecPrices = ({ClassSec="features section-padding-0-70" , img, data , ClassSpanTitle}) => {

    return (

      <section className={ClassSec}>
        <div className="container">

          <SectionHeading
            title="Algorithmic Trading"
            text="Precision-Driven Performance in Every Trade"
            ClassSpanTitle={ClassSpanTitle}
          />          
          <div className="row align-items-center">
            {data && data.map((item , key) => (
              <PricingItem
                key={key}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecPrices;