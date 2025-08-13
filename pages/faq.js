import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Mantu and how does it work?',
          answer: 'Mantu is a comprehensive platform that connects you with local stores for food, groceries, medicine, home services, and shopping. Simply browse categories, select stores, add items to cart, and get them delivered to your doorstep.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Login" button in the top right corner, then select "Create Account". Fill in your details including name, email, phone number, and address to get started.'
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes, we have mobile apps available for both iOS and Android. You can download them from the App Store or Google Play Store.'
        }
      ]
    },
    {
      category: 'Orders & Delivery',
      questions: [
        {
          question: 'How do I place an order?',
          answer: 'Browse categories, select a store, add items to your cart, review your order, provide delivery details, choose payment method, and confirm your order.'
        },
        {
          question: 'What are the delivery charges?',
          answer: 'Delivery charges vary by store and distance. Most stores offer free delivery on orders above a certain amount. You can see the exact delivery fee before placing your order.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery times vary by category: Food (20-45 mins), Groceries (1-2 hours), Medicine (15-30 mins), and other items (same day or next day).'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you can track your order in real-time through your account dashboard or the tracking link sent to your email/SMS.'
        },
        {
          question: 'Can I modify or cancel my order?',
          answer: 'You can modify or cancel your order within a few minutes of placing it. Once the store starts preparing your order, modifications may not be possible.'
        }
      ]
    },
    {
      category: 'Payment',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept credit/debit cards, digital wallets (PayPal, Apple Pay, Google Pay), net banking, and cash on delivery (where available).'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard encryption and secure payment gateways to protect your financial information. We never store your card details.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Yes, refunds are processed for cancelled orders, missing items, or quality issues. Refunds typically take 3-7 business days to reflect in your account.'
        }
      ]
    },
    {
      category: 'Stores & Products',
      questions: [
        {
          question: 'How do I find stores near me?',
          answer: 'Enter your location during signup or in your profile. The app will automatically show stores that deliver to your area.'
        },
        {
          question: 'Can I add stores to favorites?',
          answer: 'Yes, you can mark stores as favorites by clicking the heart icon. Your favorite stores will appear in a separate section for easy access.'
        },
        {
          question: 'What if an item is out of stock?',
          answer: 'If an item is out of stock, you\'ll be notified during checkout. You can choose to remove it or replace it with a similar item if available.'
        }
      ]
    },
    {
      category: 'Account & Support',
      questions: [
        {
          question: 'How do I update my profile information?',
          answer: 'Go to your account settings to update personal information, delivery addresses, and payment methods.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach our customer support through the Contact Us page, live chat, email at support@mantu.com, or phone at +1-800-MANTU-HELP.'
        },
        {
          question: 'What should I do if I have an issue with my order?',
          answer: 'Contact customer support immediately with your order number. We\'ll investigate and resolve the issue promptly, including refunds or replacements if necessary.'
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
 
      
      <main className="wrapper sb-default">
        <div className="mn-main-content">
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
                <div className="row">
                  <div className="col-12">
                    <div className="row gi_breadcrumb_inner">
                      <div className="col-md-6 col-sm-12">
                        <h2 className="mn-breadcrumb-title">Frequently Asked Questions</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">FAQ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-faq p-b-15">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mn-faq-header">
                        <h3>Frequently Asked Questions</h3>
                        <p>Find answers to common questions about our platform and services</p>
                      </div>

                      <div className="mn-faq-content">
                        {faqData.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="faq-category">
                            <h4 className="category-title">
                              <i className="ri-question-line"></i>
                              {category.category}
                            </h4>
                            <div className="faq-accordion">
                              {category.questions.map((item, questionIndex) => {
                                const isActive = activeIndex === `${categoryIndex}-${questionIndex}`;
                                return (
                                  <div key={questionIndex} className="faq-item">
                                    <div 
                                      className={`faq-question ${isActive ? 'active' : ''}`}
                                      onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                                    >
                                      <h5>{item.question}</h5>
                                      <i className={`ri-${isActive ? 'subtract' : 'add'}-line`}></i>
                                    </div>
                                    <div className={`faq-answer ${isActive ? 'active' : ''}`}>
                                      <p>{item.answer}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contact Support Section */}
                      <div className="faq-support-section">
                        <div className="support-card">
                          <h4>Still have questions?</h4>
                          <p>Can't find the answer you're looking for? Our customer support team is here to help.</p>
                          <div className="support-actions">
                            <Link href="/contact-us" className="mn-btn-1 btn">
                              Contact Support
                            </Link>
                            <a href="mailto:support@mantu.com" className="mn-btn-2 btn">
                              Email Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
   
    </>
  );
};

export default FAQ;