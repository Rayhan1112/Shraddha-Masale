import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp } from 'react-animations';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the arrow icon


// Animations
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

// Styled Components
const ProductContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  animation: 1s ${fadeInAnimation};
  position: relative;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin-top: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    padding: 2rem;
    max-width: 1400px;
  }

  @media (min-width: 1200px) {
    padding: 2rem 3rem;
  }
`;

const ProductGallery = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  animation: 1s ${slideInUpAnimation};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-bottom: 0;
    position: sticky;
    top: 100px;
    height: fit-content;
    align-self: flex-start;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 576px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 992px) {
    height: 400px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  animation: 1s ${slideInUpAnimation};
  width: 100%;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #27ae60;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProductDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 2rem 0 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #27ae60;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 1rem;
    color: #555;
    line-height: 1.6;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #27ae60;
      font-size: 1.5rem;
      line-height: 1;
    }
  }
`;

const UsageSection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid #27ae60;

  h3 {
    color: #2c3e50;
    margin-top: 0;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const UsageCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  h4 {
    color: #27ae60;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  ul {
    padding-left: 20px;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
      color: #555;
      font-size: 0.95rem;

      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

const Testimonial = styled.blockquote`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  font-style: italic;
  color: #555;
  border-left: 4px solid #27ae60;

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  footer {
    font-weight: 600;
    color:rgb(255, 255, 255);
  }
`;

const CtaSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  border-radius: 8px;

  h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      background-color: #219653;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }
`;
const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgb(224, 0, 0);
    transform: scale(1.1);
  }

  svg {
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    width: 36px;
    height: 36px;
    
    svg {
      font-size: 1rem;
    }
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    width: 32px;
    height: 32px;
    
    svg {
      font-size: 0.9rem;
    }
  }
`;
// New styled components for the PNG decorations
const TopRightDecoration = styled.div`
  position: absolute;
  top: 10vh;
  right: -30px;
  width: 160px;
  height: 160px;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 576px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 992px) {
    top: -20vh;
    right: -30px;
    width: 160px;
    height: 160px;
  }
`;

const BottomLeftDecoration = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 80px;
  height: 80px;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 576px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 992px) {
    bottom: -10vh;
  left: -40px;
  width: 180px;
  height: 180px;
  }
`;
const ProductPage2 = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate(); // Initialize useNavigate
   // Cloudinary image URLs
   const decorLeft = "https://res.cloudinary.com/djlhicadd/image/upload/v1743578589/tyorkpnc2jwjjleoalyh.png";
   const decorRight = "https://res.cloudinary.com/djlhicadd/image/upload/v1743578589/p4d7h5wovljrk9ycrzlh.png";

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleBackClick = () => {
    navigate('/home'); // Navigate to home page
  };

  return (
    <ProductContainer>
        <BackButton onClick={handleBackClick} aria-label="Go back to home">
            <FaArrowLeft />
          </BackButton>
          <ProductGallery>
        <MainImage>
          <img src={product.image} alt={product.title} />
          {/* Add your PNG decorations here */}
          <TopRightDecoration>
            <img src={decorLeft} alt="Decoration" />
          </TopRightDecoration>
          <BottomLeftDecoration>
            <img src={decorRight}alt="Decoration" />
          </BottomLeftDecoration>
        </MainImage>
      </ProductGallery>

      <ProductInfo>
        <ProductTitle>Hetika Coriander Powder (धनेपावडर) - A Burst of Freshness and Flavor</ProductTitle>
        <ProductDescription>
          Experience the subtle sweetness and citrusy aroma of Hetika Coriander Powder. Made from
          premium coriander seeds, slow-roasted over the Chulha flame, this spice brings a depth of
          flavor to every dish—be it curries, gravies, or chutneys. With no preservatives or additives,
          our coriander powder delivers purity and authenticity in every pinch.
        </ProductDescription>

        <SectionTitle>The Hetika Difference: Uncompromised Authenticity</SectionTitle>
        <BenefitsList>
          <li><strong>Chulha-Roasted for Authentic Flavor:</strong> Traditional roasting on a Chulha flame ensures the coriander seeds develop a rich, robust taste that elevates every dish.</li>
          <li><strong>Premium Quality Seeds:</strong> We use only the finest coriander seeds, carefully selected for their aroma and flavor.</li>
          <li><strong>No Preservatives, No Additives:</strong> 100% pure and natural—no artificial colors, preservatives, or fillers.</li>
          <li><strong>Rich in Nutrients:</strong> Naturally supports immunity, digestion, and overall wellness.</li>
        </BenefitsList>

        <SectionTitle>The Benefits of Hetika Coriander Powder</SectionTitle>
        <BenefitsList>
          <li><strong>Supports Digestion:</strong> Known for its digestive properties, coriander helps soothe the stomach and promote gut health.</li>
          <li><strong>Boosts Immunity:</strong> Rich in antioxidants, vitamins, and minerals, supporting overall wellness.</li>
          <li><strong>Aids in Detoxification:</strong> Helps eliminate toxins from the body, promoting a healthy metabolism.</li>
          <li><strong>Enhances Skin Health:</strong> Contains natural antioxidants that can help maintain glowing skin.</li>
          <li><strong>Balances Flavor:</strong> Adds a sweet, citrusy aroma and mild warmth to dishes, making it a staple in Indian cuisine.</li>
        </BenefitsList>

        <SectionTitle>Everyday Versatility: A Must-Have Kitchen Essential</SectionTitle>
        <UsageSection>
          <h3>Hetika Coriander Powder adds depth and complexity to a variety of dishes:</h3>
          <UsageGrid>
            <UsageCard>
              <h4>In the Kitchen:</h4>
              <ul>
                <li>Sprinkle over curries, dals, and gravies for a subtle sweetness and earthy aroma</li>
                <li>Use in marinades for meats, vegetables, and paneer to enhance flavor</li>
                <li>Blend into chutneys and dips for a refreshing taste</li>
                <li>Add to spice mixes, pickles, and masalas for authentic Indian flavors</li>
              </ul>
            </UsageCard>
            <UsageCard>
              <h4>For Wellness and Home Remedies:</h4>
              <ul>
                <li>Brew coriander tea for digestive support and detoxification</li>
                <li>Use in DIY skincare masks for clear and healthy skin</li>
              </ul>
            </UsageCard>
          </UsageGrid>
        </UsageSection>

        <SectionTitle>Why Choose Hetika Coriander Powder?</SectionTitle>
        <BenefitsList>
          <li><strong>100% Pure and Natural:</strong> Experience the true taste of premium coriander.</li>
          <li><strong>Traditional Chulha-Roasting:</strong> Captures the authentic flavor and aroma.</li>
          <li><strong>No Preservatives or Additives:</strong> Just pure coriander goodness.</li>
          <li><strong>Versatile Usage:</strong> Ideal for cooking, wellness, and home remedies.</li>
        </BenefitsList>

        <Testimonial>
          <p>"Hetika Coriander Powder adds a unique depth to my dishes—nothing matches the aroma and taste of this traditional blend."</p>
          <footer>- A Satisfied Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Bring Home the Authentic Taste of Hetika Coriander Powder!</h3>
          <p>Experience the unmatched flavor of Hetika Coriander Powder and elevate your cooking to new heights. Order now and discover the essence of traditional Indian spices, perfected with every pinch!</p>
          <button><a style={{textDecoration:'none',color:'white'}} href="https://wa.me/+917720011220">Order Now</a></button>
        </CtaSection>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductPage2;