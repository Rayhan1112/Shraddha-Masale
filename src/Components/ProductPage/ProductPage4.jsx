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
    background-color:rgb(127, 127, 127);
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
    background-color: rgb(127, 127, 127);
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
      color: rgb(127, 127, 127);
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
  border-left: 4px solid rgb(127, 127, 127);

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
    color: rgb(127, 127, 127);
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
// Styled Components
const BackButton = styled.button`
  position: fixed;
  top: 40px;
  left: 40px;
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
    color:rgb(255, 255, 255);
    font-size: 1.2rem;
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
const Testimonial = styled.blockquote`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  font-style: italic;
  color: #555;
  border-left: 4px solid rgb(127, 127, 127);

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
    color: #2c3e50;;
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
    background-color:rgb(127, 127, 127);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      background-color: rgb(127, 127, 127);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }
`;
const ProductPage4 = () => {
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
          <ProductTitle>Hetika Kala Masala (काळा मसाला) - The Essence of Authentic Maharashtrian Flavor</ProductTitle>
          <ProductDescription>
            Hetika Kala Masala is a tribute to the rich culinary heritage of Maharashtra. This signature
            spice blend is crafted using over 15 hand-selected spices, each slow-roasted on a traditional
            Chulha. The result is a unique, smoky, and earthy masala with a deep, bold flavor that
            elevates everyday dishes—be it sabzis, dals, or curries.
          </ProductDescription>
  
          <SectionTitle>The Hetika Difference: Tradition, Quality, and Flavor</SectionTitle>
          <BenefitsList>
            <li><strong>Hand-Ground and Traditionally Roasted:</strong> Each spice is slow-roasted on the Chulha to develop a rich, smoky aroma and deep, complex flavor.</li>
            <li><strong>Over 15 Premium Spices:</strong> Includes coriander seeds, cumin, black pepper, cinnamon, cloves, cardamom, bay leaves, star anise, dry coconut, and more.</li>
            <li><strong>100% Pure and Authentic:</strong> No artificial colors, flavors, or fillers—just pure, unadulterated spices.</li>
            <li><strong>Fresh Aroma and Smooth Texture:</strong> Ensures every dish is infused with an authentic Maharashtrian taste.</li>
          </BenefitsList>
  
          <SectionTitle>The Benefits of Hetika Kala Masala</SectionTitle>
          <BenefitsList>
            <li><strong>Enhances Flavor:</strong> The slow-roasting process intensifies the taste of each spice, creating a bold, smoky flavor profile.</li>
            <li><strong>Aromatic and Warming:</strong> Adds warmth and richness to curries, dals, and vegetable preparations.</li>
            <li><strong>Supports Digestion:</strong> Many spices in the blend, like cumin and black pepper, are known for aiding digestion.</li>
            <li><strong>Perfectly Balanced:</strong> The blend of spices is carefully curated to ensure a harmonious balance of heat, sweetness, and depth.</li>
          </BenefitsList>
  
          <SectionTitle>Everyday Versatility: A Taste of Maharashtra in Every Dish</SectionTitle>
          <UsageSection>
            <h3>Hetika Kala Masala can transform even the simplest dishes with its bold, complex flavors:</h3>
            <UsageGrid>
              <UsageCard>
                <h4>In the Kitchen:</h4>
                <ul>
                  <li>Add a spoonful to sabzis, curries, and dals for a deep, smoky flavor</li>
                  <li>Use as a marinade for meats, vegetables, or paneer</li>
                  <li>Sprinkle on snacks, chaats, or roasted nuts for a spicy twist</li>
                  <li>Mix into rice dishes like biryanis or pulaos for added depth</li>
                </ul>
              </UsageCard>
              <UsageCard>
                <h4>For Traditional Maharashtrian Dishes:</h4>
                <ul>
                  <li>Elevate dishes like Varan-Bhaat, Misal, Usal, and Bharli Vangi</li>
                  <li>Perfect for authentic dishes like Kala Masala Chicken or Mutton</li>
                </ul>
              </UsageCard>
            </UsageGrid>
          </UsageSection>
  
          <SectionTitle>Why Choose Hetika Kala Masala?</SectionTitle>
          <BenefitsList>
            <li><strong>100% Pure and Authentic:</strong> No artificial colors, fillers, or preservatives.</li>
            <li><strong>Hand-Ground and Traditionally Roasted:</strong> Preserves the natural aroma and flavor.</li>
            <li><strong>Perfectly Balanced Blend:</strong> Over 15 premium spices in perfect harmony.</li>
            <li><strong>Versatile Usage:</strong> Ideal for curries, dals, sabzis, and more.</li>
          </BenefitsList>
  
          <Testimonial>
            <p>"Hetika Kala Masala brings authentic Maharashtrian flavors to my cooking. The aroma and taste are unbeatable—it's like having a traditional kitchen experience in every meal!"</p>
            <footer>- A Delighted Customer</footer>
          </Testimonial>
  
          <CtaSection>
            <h3>Bring Home the Bold Flavors of Hetika Kala Masala!</h3>
            <p>Transform your cooking with the bold, smoky, and authentic taste of Hetika Kala Masala. Order now and bring home the essence of traditional Maharashtrian cuisine!</p>
            <button><a style={{textDecoration:'none',color:'white'}} href="https://wa.me/+917720011220">Order Now</a></button>
            </CtaSection>
        </ProductInfo>
      </ProductContainer>
    );
  };
  
  export default ProductPage4;