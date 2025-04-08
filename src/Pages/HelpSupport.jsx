import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle, FaShippingFast, FaExchangeAlt, FaMoneyBillWave } from 'react-icons/fa';

const HelpContainer = styled.div`
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

const HelpHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: #b71c1c;
    font-size: 2.5rem;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: #e67e22;
    }
  }

  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const HelpCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #b71c1c;
    font-size: 1.5rem;
    margin: 20px 0 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    color: #555;
  }

  a {
    color: #e67e22;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  background-color: #f8e1d5;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e67e22;
  font-size: 1.5rem;
`;

const FAQSection = styled.section`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  margin-bottom: 40px;

  h2 {
    color: #b71c1c;
    font-size: 1.8rem;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;

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
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const HelpSupport = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website by selecting products, adding them to your cart, and proceeding through checkout. For bulk orders, please contact our customer support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and cash on delivery (COD) for eligible orders."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email/SMS. You can track your order using this number on our website or the courier partner's website."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for damaged or incorrect products. Please contact our customer support to initiate a return."
    },
    {
      question: "Do you offer wholesale/bulk pricing?",
      answer: "Yes, we offer special pricing for bulk orders. Please contact our sales team at sales@shraddhamasale.com for more information."
    }
  ];

  return (
    <HelpContainer>
      <HelpHeader>
        <h1>Help & Support</h1>
        <p>We're here to help you with any questions or concerns about our products and services.</p>
      </HelpHeader>

      <HelpGrid>
        <HelpCard>
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          <h2>Contact Us</h2>
          <p>Have questions? Our customer support team is available to help you.</p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><strong>Email:</strong> <a href="mailto:support@shraddhamasale.com">support@shraddhamasale.com</a></li>
            <li><strong>Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</li>
          </ul>
        </HelpCard>

        <HelpCard>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <h2>Store Locations</h2>
          <p>Visit our physical stores to experience our products firsthand.</p>
          <ul>
            <li><strong>Head Office:</strong> 123 Spice Market, Mumbai, Maharashtra - 400001</li>
            <li><strong>Delhi Branch:</strong> 45 Masala Lane, Delhi - 110001</li>
            <li><strong>Bangalore Branch:</strong> 78 Aroma Road, Bangalore, Karnataka - 560001</li>
          </ul>
        </HelpCard>

        <HelpCard>
          <IconWrapper>
            <FaQuestionCircle />
          </IconWrapper>
          <h2>Quick Help</h2>
          <p>Find answers to common questions about orders, shipping, and more.</p>
          <ul>
            <li><a href="#faqs">Browse FAQs</a></li>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
          </ul>
        </HelpCard>
      </HelpGrid>

      <FAQSection id="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <h3><FaQuestionCircle /> {faq.question}</h3>
            <p>{faq.answer}</p>
          </FAQItem>
        ))}
      </FAQSection>

      <HelpGrid>
        <HelpCard>
          <IconWrapper>
            <FaShippingFast />
          </IconWrapper>
          <h2>Shipping Information</h2>
          <p>We deliver across India through trusted courier partners.</p>
          <ul>
            <li>Standard delivery: 3-5 business days</li>
            <li>Express delivery: 1-2 business days (additional charges apply)</li>
            <li>Free shipping on orders above ₹999</li>
          </ul>
        </HelpCard>

        <HelpCard>
          <IconWrapper>
            <FaExchangeAlt />
          </IconWrapper>
          <h2>Returns & Exchanges</h2>
          <p>Our hassle-free return policy ensures your complete satisfaction.</p>
          <ul>
            <li>7-day return window</li>
            <li>Free returns for damaged/incorrect products</li>
            <li>Refund processed within 3-5 business days</li>
          </ul>
        </HelpCard>

        <HelpCard>
          <IconWrapper>
            <FaMoneyBillWave />
          </IconWrapper>
          <h2>Payment Options</h2>
          <p>We offer multiple secure payment methods for your convenience.</p>
          <ul>
            <li>Credit/Debit Cards</li>
            <li>UPI Payments</li>
            <li>Net Banking</li>
            <li>Cash on Delivery (COD)</li>
          </ul>
        </HelpCard>
      </HelpGrid>
    </HelpContainer>
  );
};

export default HelpSupport;