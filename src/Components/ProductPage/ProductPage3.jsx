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
    background-color: rgb(255, 6, 6);
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
    background-color:rgb(255, 6, 6);
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
      color: rgb(255, 6, 6);
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
  border-left: 4px solid rgb(255, 6, 6);

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
    color:rgb(255, 6, 6);
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
  border-left: 4px solid rgb(255, 6, 6);;

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
    background-color:rgb(255, 6, 6);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      background-color: rgb(255, 6, 6);;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }
`;
// Styled Components
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
const ProductPage3 = () => {
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
          <ProductTitle>Hetika Mirchi Powder (मिरची मसाला) - A Fiery Burst of Flavor</ProductTitle>
          <ProductDescription>
            Spice up your meals with the bold and authentic taste of Hetika Mirchi Powder! Made from
            sun-dried red chilies and a blend of slow-roasted spices, this masala delivers the perfect
            balance of heat and flavor. Following a traditional recipe passed down through generations,
            our Mirchi Powder is roasted on a Chulha to capture a unique, smoky taste.
          </ProductDescription>
  
          <SectionTitle>The Hetika Difference: Authenticity in Every Pinch</SectionTitle>
          <BenefitsList>
            <li><strong>Traditional Recipe, Generational Legacy:</strong> Crafted from a recipe passed down through generations, ensuring a taste that feels like home.</li>
            <li><strong>Roasted on a Chulha:</strong> Slow-roasting on a traditional Chulha locks in the smoky, fiery essence.</li>
            <li><strong>Sun-Dried Red Chilies:</strong> Handpicked red chilies are sun-dried to intensify their flavor and color.</li>
            <li><strong>No Additives, No Shortcuts:</strong> 100% pure and natural—no artificial colors, flavors, or fillers.</li>
            <li><strong>Perfect Balance of Heat and Flavor:</strong> Bold, fiery, and aromatic, designed to elevate any dish.</li>
          </BenefitsList>
  
          <SectionTitle>The Benefits of Hetika Mirchi Powder</SectionTitle>
          <BenefitsList>
            <li><strong>Boosts Metabolism:</strong> The capsaicin in red chilies supports metabolism and digestion.</li>
            <li><strong>Rich in Antioxidants:</strong> Contains beneficial compounds that promote overall health.</li>
            <li><strong>Adds Depth and Spice:</strong> Offers a smoky, intense heat that complements various cuisines.</li>
            <li><strong>Traditional Taste:</strong> Elevates dishes with authentic, bold flavors.</li>
          </BenefitsList>
  
          <SectionTitle>Everyday Versatility: A Spicy Kick for All Your Dishes</SectionTitle>
          <UsageSection>
            <h3>Hetika Mirchi Powder is perfect for anyone who loves a touch of heat:</h3>
            <UsageGrid>
              <UsageCard>
                <h4>In the Kitchen:</h4>
                <ul>
                  <li>Add to curries, gravies, and dals for a fiery kick</li>
                  <li>Sprinkle over tandoori dishes, kebabs, and grilled meats</li>
                  <li>Mix into marinades for chicken, fish, and paneer</li>
                  <li>Enhance snacks, chaats, and street food with a spicy twist</li>
                </ul>
              </UsageCard>
              <UsageCard>
                <h4>For Traditional Indian Dishes:</h4>
                <ul>
                  <li>Perfect for spicy dishes like Kolhapuri curries and Misal</li>
                  <li>Elevates regional dishes like Mirchi Ka Salan</li>
                  <li>Ideal for Maharashtrian specialties and spicy masala fries</li>
                </ul>
              </UsageCard>
            </UsageGrid>
          </UsageSection>
  
          <SectionTitle>Why Choose Hetika Mirchi Powder?</SectionTitle>
          <BenefitsList>
            <li><strong>100% Pure and Authentic:</strong> No artificial additives or preservatives</li>
            <li><strong>Traditional Chulha-Roasting:</strong> Delivers an unmatched smoky aroma</li>
            <li><strong>Perfectly Balanced Heat:</strong> Ideal for bold, fiery taste lovers</li>
            <li><strong>Versatile Usage:</strong> Perfect for everyday cooking and traditional dishes</li>
          </BenefitsList>
  
          <Testimonial>
            <p>"Hetika Mirchi Powder adds the perfect amount of heat and depth to my cooking. The smoky aroma and bold flavor are truly authentic!"</p>
            <footer>- A Satisfied Customer</footer>
          </Testimonial>
  
          <CtaSection>
            <h3>Bring Home the Bold, Fiery Taste of Hetika Mirchi Powder!</h3>
            <p>Transform your dishes with the intense, smoky, and spicy flavor of Hetika Mirchi Powder. Order now and experience the authentic taste of traditional Indian spices!</p>
            <button><a style={{textDecoration:'none',color:'white'}} href="https://wa.me/+917720011220">Order Now</a></button>
            </CtaSection>
        </ProductInfo>
      </ProductContainer>
    );
  };
  
  export default ProductPage3;