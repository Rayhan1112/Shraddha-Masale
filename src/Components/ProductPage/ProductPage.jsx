import { useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInUp } from 'react-animations';
import { useEffect } from 'react';
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
  margin-top: 80px; /* Added margin to account for navbar height */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    padding: 2rem;
    max-width: 1400px;
    margin-top: 80px; /* Consistent margin for desktop */
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
    top: 100px; /* Adjusted to account for navbar */
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
    background-color: #e67e22;
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
    background-color: #e67e22;
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
      color: #e67e22;
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
  border-left: 4px solid #e67e22;

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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h4 {
    color: #e67e22;
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
  border-left: 4px solid #e67e22;

  p {
    margin: 0 0 1rem 0;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  footer {
    font-weight: 600;
    color: rgb(255, 255, 255);
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
    background-color: #e67e22;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      background-color: #d35400;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  display: none; /* Hidden by default for mobile */

  @media (min-width: 992px) {
    display: block; /* Show only on desktop */
    position: absolute;
    top: -20vh;
    right: -30px;
    width: 160px;
    height: 160px;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const BottomLeftDecoration = styled.div`
  display: none; /* Hidden by default for mobile */

  @media (min-width: 992px) {
    display: block; /* Show only on desktop */
    position: absolute;
    bottom: -10vh;
    left: -40px;
    width: 180px;
    height: 180px;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
const ProductPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { product } = state || {};

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
    // Cloudinary image URLs
    const decorLeft = "https://res.cloudinary.com/djlhicadd/image/upload/v1743578589/tyorkpnc2jwjjleoalyh.png";
    const decorRight = "https://res.cloudinary.com/djlhicadd/image/upload/v1743578589/p4d7h5wovljrk9ycrzlh.png";
  return (
    <ProductContainer>
      {/* Back Button */}
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
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>
          Turmeric, known as Haldi in India, is more than just a spice—it's nature's gift to health and wellness.
        </ProductDescription>

        <SectionTitle>The Power of Haldi (हळद): A Legacy of Wellness</SectionTitle>
        <BenefitsList>
          <li><strong>Healing Properties:</strong> Rich in curcumin, known for its anti-inflammatory, antioxidant, and healing benefits.</li>
          <li><strong>Immunity Booster:</strong> Supports immune health, combats inflammation, and helps the body heal naturally.</li>
          <li><strong>Skin and Beauty Benefits:</strong> A natural remedy for glowing skin, helps reduce acne, and brightens complexion.</li>
          <li><strong>Digestive Aid:</strong> Promotes digestion, reduces bloating, and soothes the stomach.</li>
          <li><strong>Pain Relief and Joint Health:</strong> Used for centuries in traditional remedies to alleviate pain and inflammation.</li>
        </BenefitsList>

        <SectionTitle>Everyday Versatility: Add a Golden Touch to Life</SectionTitle>
        <UsageSection>
          <h3>Hetika Turmeric Powder can be used in a variety of ways:</h3>
          <UsageGrid>
            <UsageCard>
              <h4>In the Kitchen:</h4>
              <ul>
                <li>Add a pinch to curries, dals, and gravies for vibrant color and rich taste</li>
                <li>Sprinkle over rice, scrambled eggs, or vegetables for flavor boost</li>
                <li>Blend into smoothies, teas, and lattes for warm, earthy aroma</li>
              </ul>
            </UsageCard>
            <UsageCard>
              <h4>For Beauty and Wellness:</h4>
              <ul>
                <li>Create a face mask by mixing with honey and yogurt for radiant skin</li>
                <li>Use in DIY body scrubs for soft, glowing skin</li>
                <li>Mix with warm milk for comforting, immunity-boosting Haldi Doodh (Golden Milk)</li>
              </ul>
            </UsageCard>
          </UsageGrid>
        </UsageSection>

        <SectionTitle>Why Choose Hetika Turmeric Powder?</SectionTitle>
        <BenefitsList>
          <li><strong>100% Pure and Authentic:</strong> Experience the true taste and benefits of pure turmeric.</li>
          <li><strong>Traditional Processing Method:</strong> Retains natural oils and aroma.</li>
          <li><strong>Potent Curcumin Content:</strong> Ensures the best of turmeric's healing properties.</li>
          <li><strong>Versatile Usage:</strong> Perfect for cooking, beauty, and home remedies.</li>
        </BenefitsList>

        <SectionTitle>What Our Customers Say</SectionTitle>
        <Testimonial>
          <p>"Hetika Turmeric Powder has transformed my cooking! The flavor is so authentic, and the color is vibrant. You can truly taste the difference!"</p>
          <footer>- A Happy Customer</footer>
        </Testimonial>

        <CtaSection>
          <h3>Bring Home the Goodness of Hetika Turmeric Powder!</h3>
          <p>Unlock the golden benefits of Hetika Turmeric Powder and bring the taste of tradition and wellness into your life. Order now and experience the purity and authenticity that only Hetika can deliver!</p>
          <button>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://wa.me/+917720011220">Order Now</a>
          </button>
        </CtaSection>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductPage;