"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="AdHub"
          navItems={[
            {"name": "Features", "id": "features"},
            {"name": "Pricing", "id": "pricing"},
            {"name": "Testimonials", "id": "testimonials"},
            {"name": "FAQ", "id": "faq"},
            {"name": "Contact", "id": "contact"}
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ADHUB"
          description="Maximize your YouTube ad reach with data-driven campaigns and expert optimization strategies"
          buttons={[
            {"text": "Get Started", "href": "contact"},
            {"text": "Learn More", "href": "features"}
          ]}
          slides={[
            {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726096121-typrfr5f.jpg", "imageAlt": "YouTube advertising dashboard"},
            {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726096967-fe5cbau0.jpg", "imageAlt": "Digital marketing video production"},
            {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726097544-g1tqx3bf.jpg", "imageAlt": "Social media marketing campaign"}
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="About us"
          description="We specialize in creating high-converting YouTube advertising campaigns that drive real business results. Our team combines creative excellence with data science to help businesses reach their ideal customers through strategic video advertising."
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Features"
          description="Everything you need to run successful YouTube ad campaigns"
          tag="Features"
          features={[
            {
              "id": 1,
              "title": "Professional Video Creation",
              "description": "Our expert team creates compelling video ads optimized for YouTube's platform, ensuring your message resonates with your target audience.",
              "phoneOne": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726098001-d5ic50fr.jpg"},
              "phoneTwo": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726098001-d5ic50fr.jpg"}
            },
            {
              "id": 2,
              "title": "Advanced Audience Targeting",
              "description": "Reach exactly who you want to reach using demographic, interest-based, and behavioral targeting parameters for maximum ROI.",
              "phoneOne": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726098541-gngve5qb.jpg"},
              "phoneTwo": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726098541-gngve5qb.jpg"}
            },
            {
              "id": 3,
              "title": "Real-Time Analytics",
              "description": "Monitor campaign performance with detailed analytics dashboards showing views, clicks, conversions, and cost-per-acquisition metrics.",
              "phoneOne": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726099262-4p4p80l6.jpg"},
              "phoneTwo": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726099262-4p4p80l6.jpg"}
            },
            {
              "id": 4,
              "title": "Continuous Optimization",
              "description": "Our AI-powered optimization engine continuously tests and refines your campaigns to improve performance and reduce advertising costs.",
              "phoneOne": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726099901-e3zcyu7i.jpg"},
              "phoneTwo": {"imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726099901-e3zcyu7i.jpg"}
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your advertising budget and business goals"
          tag="Pricing"
          plans={[
            {
              "id": "starter",
              "price": "$2,000/mo",
              "name": "Starter",
              "buttons": [
                {"text": "Get Started", "href": "contact"},
                {"text": "Contact Sales", "href": "contact"}
              ],
              "features": [
                "Up to 2 video campaigns",
                "Basic audience targeting",
                "Monthly performance reports",
                "Email support",
                "$5,000 ad spend included"
              ]
            },
            {
              "id": "professional",
              "badge": "Most Popular",
              "badgeIcon": Sparkles,
              "price": "$5,000/mo",
              "name": "Professional",
              "buttons": [
                {"text": "Get Started", "href": "contact"},
                {"text": "Contact Sales", "href": "contact"}
              ],
              "features": [
                "Up to 5 video campaigns",
                "Advanced audience targeting",
                "Weekly performance reports",
                "Priority email support",
                "$15,000 ad spend included",
                "A/B testing capabilities"
              ]
            },
            {
              "id": "enterprise",
              "price": "Custom",
              "name": "Enterprise",
              "buttons": [
                {"text": "Contact Sales", "href": "contact"},
                {"text": "Schedule Call", "href": "contact"}
              ],
              "features": [
                "Unlimited video campaigns",
                "Premium audience targeting",
                "Real-time analytics dashboard",
                "Dedicated account manager",
                "Custom ad spend allocation",
                "Full campaign optimization service"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Business Leaders"
          description="See what our clients have to say about their YouTube advertising success"
          tag="Success Stories"
          testimonials={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "role": "E-commerce Director",
              "testimonial": "AdHub transformed our YouTube advertising strategy. We increased conversions by 250% in just three months. The team's expertise and attention to detail made all the difference.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726100598-0d8ik4xw.jpg"
            },
            {
              "id": "2",
              "name": "Michael Chen",
              "role": "Marketing Manager",
              "testimonial": "The real-time analytics and optimization features are incredible. We finally understand exactly where every marketing dollar is going, and the ROI has been phenomenal.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726101091-s83zbxwy.jpg"
            },
            {
              "id": "3",
              "name": "Emily Rodriguez",
              "role": "CEO",
              "testimonial": "Working with AdHub has been a game-changer for our company. Their team consistently delivers creative, high-performing video ads that resonate with our target audience.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726101633-fk0ptulm.jpg"
            },
            {
              "id": "4",
              "name": "David Kim",
              "role": "Founder",
              "testimonial": "Professional, responsive, and results-driven. AdHub exceeded our expectations with targeted campaigns that brought quality leads at lower costs than we've ever seen.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726102331-pfi93hk0.jpg"
            },
            {
              "id": "5",
              "name": "Jessica Martinez",
              "role": "Operations Manager",
              "testimonial": "The level of customization and attention to our specific business needs was impressive. AdHub treats your success as their own success.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726102919-eh18jv2c.jpg"
            },
            {
              "id": "6",
              "name": "Robert Taylor",
              "role": "Sales Director",
              "testimonial": "Outstanding service from start to finish. Their optimization strategies consistently outperform our internal expectations. Highly recommended.",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726103723-px4hr6sa.jpg"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Top companies choose AdHub to manage their YouTube advertising campaigns"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726104426-m4dc3llc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726105014-j73qk81l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726105837-0ouzptw1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726106316-red24jy8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726106777-irhhcqqp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726107330-a6avpt5d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726107962-tadzl64h.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763726108453-wyswome0.jpg"
          ]}
          textboxLayout="default"
          showCard={true}
          speed={50}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our YouTube advertising services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              "id": "1",
              "title": "How do YouTube ad campaigns work?",
              "content": "YouTube ads can appear before, during, or after videos. We create targeted campaigns that show your ads to users most likely to be interested in your products or services. Our team handles everything from creative production to bid optimization."
            },
            {
              "id": "2",
              "title": "What is the minimum ad spend?",
              "content": "Our Starter plan includes $5,000 in ad spend per month, which is an excellent starting point for most businesses. We can also discuss custom arrangements for enterprise clients."
            },
            {
              "id": "3",
              "title": "How long until I see results?",
              "content": "Most clients see initial results within 2-4 weeks as we optimize campaigns and gather performance data. Significant improvements typically come within 60-90 days as our optimization algorithms learn from campaign performance."
            },
            {
              "id": "4",
              "title": "Can you create custom video content?",
              "content": "Yes! Our creative team produces professional video ads from scratch or can work with existing content. We tailor all creative to YouTube's best practices and your target audience preferences."
            },
            {
              "id": "5",
              "title": "Do you provide performance reporting?",
              "content": "Absolutely. Professional and Enterprise plans include weekly or real-time analytics dashboards. You'll always know exactly how your campaigns are performing and where your budget is going."
            },
            {
              "id": "6",
              "title": "What if I'm not happy with the results?",
              "content": "We're confident in our work, but we understand concerns. We continuously optimize campaigns to improve performance. If you're not seeing the results you want, we'll work with you to adjust strategy and tactics."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Grow Your YouTube Advertising?"
          description="Get in touch with our team to discuss your advertising goals and find the perfect plan for your business"
          inputs={[
            {"name": "name", "type": "text", "placeholder": "Your Name", "required": true},
            {"name": "email", "type": "email", "placeholder": "Your Email", "required": true},
            {"name": "company", "type": "text", "placeholder": "Company Name", "required": true},
            {"name": "budget", "type": "text", "placeholder": "Monthly Ad Budget", "required": true}
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about your advertising goals and current challenges",
            "rows": 5,
            "required": true
          }}
          buttonText="Schedule Consultation"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="AdHub"
          copyrightText="© 2025 | AdHub - YouTube Advertising Solutions"
          columns={[
            {
              "title": "Product",
              "items": [
                {"label": "Features", "href": "features"},
                {"label": "Pricing", "href": "pricing"},
                {"label": "How It Works", "href": "about"}
              ]
            },
            {
              "title": "Company",
              "items": [
                {"label": "About", "href": "about"},
                {"label": "Contact", "href": "contact"},
                {"label": "Success Stories", "href": "testimonials"}
              ]
            },
            {
              "title": "Resources",
              "items": [
                {"label": "FAQ", "href": "faq"},
                {"label": "Blog", "href": "https://blog.example.com"},
                {"label": "Support", "href": "contact"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}