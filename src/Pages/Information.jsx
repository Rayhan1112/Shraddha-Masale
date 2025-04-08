import styled from 'styled-components';
import { FaLeaf, FaFire, FaSeedling, FaSpinner } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi'; // Replaced GiCookingPot with GiCookingPot

const ProductPageContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 40px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;

  @media (max-width: 768px) {
    margin: 60px auto 30px;
    padding: 15px;
  }
`;

const HeroHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 30px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #fff9f5 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  h1 {
    color: #b71c1c;
    font-size: 2.8rem;
    margin-bottom: 15px;
    position: relative;
    z-index: 2;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  }

  p {
    color: #666;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: url('spice-pattern.png') no-repeat;
    opacity: 0.1;
    z-index: 1;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
      padding: 0 15px;
    }
  }
`;

const ProductSection = styled.section`
  margin-bottom: 60px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;

  &:nth-child(odd) {
    background: linear-gradient(135deg, #fff9f5 0%, #fff 100%);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  h2 {
    color: #b71c1c;
    font-size: 2rem;
    margin: 0;
    padding-bottom: 10px;
    flex-grow: 1;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #e67e22;
    }
  }

  .icon {
    background-color: #f8e1d5;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e67e22;
    font-size: 1.8rem;
    margin-right: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    
    .icon {
      margin-bottom: 15px;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ProductImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  height: 350px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ProductDetails = styled.div`
  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 20px;
  }

  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 25px 0;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    color: #555;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #e67e22;
      font-weight: bold;
    }
  }
`;

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const UsageCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  border-left: 4px solid #e67e22;

  h4 {
    color: #e67e22;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    padding-left: 20px;
    margin: 0;

    li {
      margin-bottom: 8px;
      color: #666;
    }
  }
`;

const Testimonial = styled.blockquote`
  background: linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%);
  padding: 25px;
  border-radius: 8px;
  margin: 40px 0;
  font-style: italic;
  color: #555;
  border-left: 4px solid #e67e22;
  position: relative;

  p {
    margin: 0 0 15px 0;
    font-size: 1.1rem;
    line-height: 1.7;
  }

  footer {
    font-weight: 600;
    color: #b71c1c;
    font-style: normal;
  }

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 4rem;
    color: rgba(230, 126, 34, 0.1);
    font-family: serif;
    line-height: 1;
  }
`;

const CtaSection = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #fff9f5 100%);
  border-radius: 10px;

  h3 {
    color: #b71c1c;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 25px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    background-color: #e67e22;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(230, 126, 34, 0.3);

    &:hover {
      background-color: #d35400;
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(230, 126, 34, 0.4);
    }
  }
`;

const Information = () => {
  return (
    <ProductPageContainer>
      <HeroHeader>
        <h1>Hetika Spices</h1>
        <p>Authentic flavors crafted with traditional wisdom for modern kitchens</p>
      </HeroHeader>

      {/* Turmeric Powder */}
      <ProductSection>
        <ProductHeader>
          <div className="icon"><FaLeaf /></div>
          <h2>Hetika Turmeric Powder (हळद)</h2>
        </ProductHeader>
        
        <ContentGrid>
          <ProductImage>
            <img src="/turmeric-powder.jpg" alt="Hetika Turmeric Powder" />
          </ProductImage>
          
          <ProductDetails>
            <h3>A Golden Elixir of Health and Flavor</h3>
            <p>Bright, golden, and packed with natural goodness—Hetika Turmeric Powder isn't just a spice; it's a legacy. Our turmeric is made from handpicked roots, carefully slow-roasted on a traditional Chulha (clay stove) to lock in its deep, vibrant color, earthy aroma, and powerful natural oils.</p>
            
            <h4>The Hetika Difference:</h4>
            <FeatureList>
              <li>Handpicked Quality: Finest turmeric roots selected for vibrant color</li>
              <li>Traditional Processing: Slow-roasted on Chulha for potent curcumin</li>
              <li>Pure & Authentic: No additives, artificial colors, or fillers</li>
              <li>Rich in Natural Oils: Preserves essential oils for enhanced flavor</li>
            </FeatureList>
          </ProductDetails>
        </ContentGrid>

        <h4>The Power of Haldi (हळद):</h4>
        <FeatureList>
          <li><strong>Healing Properties:</strong> Rich in curcumin with anti-inflammatory benefits</li>
          <li><strong>Immunity Booster:</strong> Supports immune health and combats inflammation</li>
          <li><strong>Skin Benefits:</strong> Natural remedy for glowing skin and acne reduction</li>
          <li><strong>Digestive Aid:</strong> Promotes digestion and soothes the stomach</li>
          <li><strong>Pain Relief:</strong> Traditional remedy for joint pain and inflammation</li>
        </FeatureList>

        <h4>Everyday Versatility:</h4>
        <UsageGrid>
          <UsageCard>
            <h4><GiCookingPot /> In the Kitchen</h4>
            <ul>
              <li>Add to curries, dals, and gravies for vibrant color</li>
              <li>Sprinkle over rice, eggs, or vegetables</li>
              <li>Blend into smoothies and golden milk</li>
            </ul>
          </UsageCard>
          <UsageCard>
            <h4><FaSeedling /> For Beauty & Wellness</h4>
            <ul>
              <li>Face mask with honey and yogurt</li>
              <li>DIY body scrubs for soft skin</li>
              <li>Haldi Doodh (Golden Milk) for immunity</li>
            </ul>
          </UsageCard>
        </UsageGrid>

        <Testimonial>
          <p>"Hetika Turmeric Powder has transformed my cooking! The flavor is so authentic, and the color is vibrant. You can truly taste the difference!"</p>
          <footer>- A Happy Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Bring Home the Goodness of Hetika Turmeric Powder!</h3>
          <p>Unlock the golden benefits of authentic turmeric powder and bring the taste of tradition into your life.</p>
          <button>Order Now</button>
        </CtaSection>
      </ProductSection>

      {/* Coriander Powder */}
      <ProductSection>
        <ProductHeader>
          <div className="icon"><FaSeedling /></div>
          <h2>Hetika Coriander Powder (धन पावडर)</h2>
        </ProductHeader>
        
        <ContentGrid>
          <ProductImage>
            <img src="/coriander-powder.jpg" alt="Hetika Coriander Powder" />
          </ProductImage>
          
          <ProductDetails>
            <h3>A Burst of Freshness and Flavor</h3>
            <p>Experience the subtle sweetness and citrusy aroma of Hetika Coriander Powder. Made from premium coriander seeds, slow-roasted over the Chulha flame, this spice brings a depth of flavor to every dish—be it curries, gravies, or chutneys.</p>
            
            <h4>The Hetika Difference:</h4>
            <FeatureList>
              <li>Chulha-Roasted for authentic flavor</li>
              <li>Premium quality seeds selected for aroma</li>
              <li>No preservatives or additives</li>
              <li>Rich in natural antioxidants</li>
            </FeatureList>
          </ProductDetails>
        </ContentGrid>

        <h4>Benefits of Coriander Powder:</h4>
        <FeatureList>
          <li><strong>Supports Digestion:</strong> Soothes stomach and promotes gut health</li>
          <li><strong>Boosts Immunity:</strong> Rich in antioxidants and vitamins</li>
          <li><strong>Detoxification:</strong> Helps eliminate toxins from the body</li>
          <li><strong>Skin Health:</strong> Maintains glowing skin naturally</li>
        </FeatureList>

        <h4>Everyday Uses:</h4>
        <UsageGrid>
          <UsageCard>
            <h4><GiCookingPot /> In Cooking</h4>
            <ul>
              <li>Sprinkle over curries and dals</li>
              <li>Use in marinades for meats and vegetables</li>
              <li>Blend into chutneys and dips</li>
            </ul>
          </UsageCard>
          <UsageCard>
            <h4><FaLeaf /> For Wellness</h4>
            <ul>
              <li>Brew coriander tea for digestion</li>
              <li>DIY skincare masks</li>
              <li>Natural detoxification aid</li>
            </ul>
          </UsageCard>
        </UsageGrid>

        <Testimonial>
          <p>"Hetika Coriander Powder adds a unique depth to my dishes—nothing matches the aroma and taste of this traditional blend."</p>
          <footer>- A Satisfied Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Experience Authentic Coriander Flavor!</h3>
          <p>Elevate your cooking with the unmatched taste of traditionally roasted coriander powder.</p>
          <button>Order Now</button>
        </CtaSection>
      </ProductSection>

      {/* Kala Masala */}
      <ProductSection>
        <ProductHeader>
          <div className="icon"><FaSpinner /></div>
          <h2>Hetika Kala Masala (काळा मसाला)</h2>
        </ProductHeader>
        
        <ContentGrid>
          <ProductImage>
            <img src="/kala-masala.jpg" alt="Hetika Kala Masala" />
          </ProductImage>
          
          <ProductDetails>
            <h3>The Essence of Authentic Maharashtrian Flavor</h3>
            <p>Hetika Kala Masala is a tribute to the rich culinary heritage of Maharashtra. This signature spice blend is crafted using over 15 hand-selected spices, each slow-roasted on a traditional Chulha. The result is a unique, smoky, and earthy masala with a deep, bold flavor.</p>
            
            <h4>The Hetika Difference:</h4>
            <FeatureList>
              <li>Hand-Ground and Traditionally Roasted</li>
              <li>Over 15 Premium Spices in perfect harmony</li>
              <li>100% Pure with no artificial colors</li>
              <li>Fresh aroma and smooth texture</li>
            </FeatureList>
          </ProductDetails>
        </ContentGrid>

        <h4>Benefits:</h4>
        <FeatureList>
          <li><strong>Enhances Flavor:</strong> Intense, smoky taste profile</li>
          <li><strong>Aromatic & Warming:</strong> Adds richness to dishes</li>
          <li><strong>Supports Digestion:</strong> Contains digestion-friendly spices</li>
          <li><strong>Perfectly Balanced:</strong> Harmony of heat, sweetness, and depth</li>
        </FeatureList>

        <h4>Culinary Uses:</h4>
        <UsageGrid>
          <UsageCard>
            <h4><GiCookingPot /> Everyday Cooking</h4>
            <ul>
              <li>Add to sabzis, curries, and dals</li>
              <li>Use as a marinade for meats</li>
              <li>Sprinkle on snacks and chaats</li>
            </ul>
          </UsageCard>
          <UsageCard>
            <h4><FaFire /> Maharashtrian Specialties</h4>
            <ul>
              <li>Elevate Varan-Bhaat, Misal, Usal</li>
              <li>Perfect for Bharli Vangi</li>
              <li>Essential for Kala Masala Chicken</li>
            </ul>
          </UsageCard>
        </UsageGrid>

        <Testimonial>
          <p>"Hetika Kala Masala brings authentic Maharashtrian flavors to my cooking. The aroma and taste are unbeatable!"</p>
          <footer>- A Delighted Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Bring Home Bold Maharashtrian Flavors!</h3>
          <p>Transform your cooking with the authentic taste of traditional Kala Masala.</p>
          <button>Order Now</button>
        </CtaSection>
      </ProductSection>

      {/* Mirchi Masala */}
      <ProductSection>
        <ProductHeader>
          <div className="icon"><FaFire /></div>
          <h2>Hetika Mirchi Masala (मरची मसाला)</h2>
        </ProductHeader>
        
        <ContentGrid>
          <ProductImage>
            <img src="/mirchi-masala.jpg" alt="Hetika Mirchi Masala" />
          </ProductImage>
          
          <ProductDetails>
            <h3>A Fiery Burst of Flavor</h3>
            <p>Spice up your meals with the bold and authentic taste of Hetika Mirchi Masala! Made from sun-dried red chilies and a blend of slow-roasted spices, this masala delivers the perfect balance of heat and flavor.</p>
            
            <h4>The Hetika Difference:</h4>
            <FeatureList>
              <li>Traditional recipe passed through generations</li>
              <li>Roasted on Chulha for smoky aroma</li>
              <li>Sun-dried red chilies for intense flavor</li>
              <li>Perfect balance of heat and flavor</li>
            </FeatureList>
          </ProductDetails>
        </ContentGrid>

        <h4>Benefits:</h4>
        <FeatureList>
          <li><strong>Boosts Metabolism:</strong> Capsaicin supports digestion</li>
          <li><strong>Rich in Antioxidants:</strong> Promotes overall health</li>
          <li><strong>Adds Depth:</strong> Smoky, intense heat for dishes</li>
          <li><strong>Authentic Taste:</strong> Traditional bold flavors</li>
        </FeatureList>

        <h4>Culinary Uses:</h4>
        <UsageGrid>
          <UsageCard>
            <h4><GiCookingPot /> Everyday Cooking</h4>
            <ul>
              <li>Add to curries and gravies</li>
              <li>Sprinkle on tandoori dishes</li>
              <li>Mix into marinades</li>
            </ul>
          </UsageCard>
          <UsageCard>
            <h4><FaFire /> Regional Specialties</h4>
            <ul>
              <li>Perfect for Kolhapuri curries</li>
              <li>Elevates Misal and street food</li>
              <li>Essential for Mirchi Ka Salan</li>
            </ul>
          </UsageCard>
        </UsageGrid>

        <Testimonial>
          <p>"Hetika Mirchi Masala adds the perfect amount of heat and depth to my cooking. The smoky aroma is truly authentic!"</p>
          <footer>- A Satisfied Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Spice Up Your Dishes Today!</h3>
          <p>Experience the intense, smoky flavor of traditionally crafted Mirchi Masala.</p>
          <button>Order Now</button>
        </CtaSection>
      </ProductSection>
    </ProductPageContainer>
  );
};

export default Information;