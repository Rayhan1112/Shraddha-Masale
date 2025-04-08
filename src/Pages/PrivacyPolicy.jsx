import styled from 'styled-components';
import { useEffect } from 'react';

const PrivacyPolicyContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 40px;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin: 60px auto 30px;
    padding: 15px;
  }
`;

const PolicyHeader = styled.div`
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

const PolicySection = styled.section`
  margin-bottom: 40px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);

  h2 {
    color: #b71c1c;
    font-size: 1.8rem;
    margin-bottom: 20px;
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

  p, li {
    margin-bottom: 15px;
    font-size: 1rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 15px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #e67e22;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 30px;
    
    h2 {
      font-size: 1.5rem;
    }
    
    p, li {
      font-size: 0.95rem;
    }
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  font-style: italic;
  color: #777;
  margin-top: 40px;
  font-size: 0.9rem;
`;

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PrivacyPolicyContainer>
      <PolicyHeader>
        <h1>Privacy Policy</h1>
        <p>At Shraddha Masale, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
      </PolicyHeader>

      <PolicySection>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, shipping and billing address when you place an order.</li>
          <li><strong>Payment Information:</strong> Credit/debit card details (processed securely through our payment gateway, not stored by us).</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic.</li>
        </ul>
      </PolicySection>

      <PolicySection>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To process and fulfill your orders</li>
          <li>To communicate with you about your orders and provide customer support</li>
          <li>To improve our products, services, and website experience</li>
          <li>To send promotional offers and newsletters (only with your consent)</li>
          <li>To prevent fraud and enhance security</li>
          <li>To comply with legal obligations</li>
        </ul>
      </PolicySection>

      <PolicySection>
        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information:</p>
        <ul>
          <li>Secure Socket Layer (SSL) technology for data encryption</li>
          <li>Regular security audits and monitoring</li>
          <li>Limited access to personal information within our organization</li>
          <li>Secure payment processing through trusted partners</li>
        </ul>
        <p>While we strive to protect your data, no method of transmission over the internet is 100% secure.</p>
      </PolicySection>

      <PolicySection>
        <h2>Third-Party Sharing</h2>
        <p>We may share your information with third parties only in these circumstances:</p>
        <ul>
          <li>With payment processors to complete transactions</li>
          <li>With shipping carriers to deliver your orders</li>
          <li>With service providers who assist in our business operations (under confidentiality agreements)</li>
          <li>When required by law or to protect our legal rights</li>
        </ul>
        <p>We never sell your personal information to third parties.</p>
      </PolicySection>

      <PolicySection>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request restriction of processing your data</li>
          <li>Withdraw consent (where applicable)</li>
          <li>Lodge a complaint with data protection authorities</li>
        </ul>
        <p>To exercise these rights, please contact us at privacy@shraddhamasale.com.</p>
      </PolicySection>

      <PolicySection>
        <h2>Cookies Policy</h2>
        <p>Our website uses cookies to:</p>
        <ul>
          <li>Remember your preferences and shopping cart</li>
          <li>Analyze website traffic and performance</li>
          <li>Enable social media features</li>
          <li>Deliver targeted advertisements (with your consent)</li>
        </ul>
        <p>You can manage cookie preferences through your browser settings.</p>
      </PolicySection>

      <PolicySection>
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. The updated version will be posted on our website with the effective date.</p>
        <p>We encourage you to review this policy regularly to stay informed about how we protect your information.</p>
      </PolicySection>

      <LastUpdated>
        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </LastUpdated>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;