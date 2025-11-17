"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, HelpCircle, HeadphonesIcon, Link, Package, Shield, Sparkles, Star, Trophy, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" }
          ]}
          logoSrc="https://pixabay.com/get/g19bbf6e57d71e2f5c572d3a7fd7be38468af809eba43af8b6756ea49c99acf1194e166179ce5c2af3cd26d8c3c37572fa25c9c9a91bb90f13b169e4483d91280_1280.jpg"
          logoAlt="SaaS Platform Logo"
          brandName="SaaSPro"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Transform Your Business with AI-Powered SaaS"
          description="Streamline operations, boost productivity, and scale your business with our comprehensive SaaS platform designed for modern enterprises"
          tag="Next-Gen Platform"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", href: "https://demo.saaspro.com" }
          ]}
          imageSrc="https://pixabay.com/get/g45e7f44ea964703b5ee9773091b3e77d98a0a5a42cdd8deea164f38bd1cce221a65a39aba8049f23642fc156a6792308dc05c5c3c4a1075a2bd8f677bd98d6c3_1280.jpg"
          imageAlt="SaaS Platform Dashboard"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Leading Companies Choose Us"
          description="We're revolutionizing how businesses operate with cutting-edge technology, intuitive design, and unmatched reliability"
          tag="Why Us"
          tagIcon={Trophy}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Enterprise Security",
              description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards",
              icon: Shield
            },
            {
              title: "99.9% Uptime",
              description: "Reliable infrastructure with global CDN and automated failover systems",
              icon: Zap
            },
            {
              title: "24/7 Support",
              description: "Dedicated customer success team available around the clock",
              icon: HeadphonesIcon
            },
            {
              title: "Easy Integration",
              description: "Connect with 1000+ apps through our robust API and pre-built connectors",
              icon: Link
            }
          ]}
          imageSrc="https://pixabay.com/get/g45e7f44ea964703b5ee9773091b3e77d98a0a5a42cdd8deea164f38bd1cce221a65a39aba8049f23642fc156a6792308dc05c5c3c4a1075a2bd8f677bd98d6c3_1280.jpg"
          imageAlt="Platform benefits visualization"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features for Modern Businesses"
          description="Everything you need to streamline operations, enhance productivity, and drive growth"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Analytics",
              description: "Get real-time insights with customizable dashboards, automated reports, and predictive analytics",
              imageSrc: "https://pixabay.com/get/gaccd112784f028978feb508f129abf4b454af623d5a64c3b02bea598e2bbde06af8f2840d66352bbb55bd9728a4bb1765269118ab8e83224cc853e1f6bf14d81_1280.jpg",
              imageAlt: "Analytics dashboard",
              button: {
                text: "Learn More",
                href: "features"
              }
            },
            {
              title: "Workflow Automation",
              description: "Automate repetitive tasks, streamline processes, and reduce manual errors with intelligent workflows",
              imageSrc: "https://pixabay.com/get/gfb4740a21bc5045429ea17027535eae6331c62b4e7d0262ec0c56a9ab4ff75c52dcdadfb282a518ce4101e507141ecfd263b4f6f5934dcf77536c92ca2f0076c_1280.jpg",
              imageAlt: "Automation interface",
              button: {
                text: "Explore",
                href: "features"
              }
            },
            {
              title: "Team Collaboration",
              description: "Enable seamless teamwork with shared workspaces, real-time editing, and communication tools",
              imageSrc: "https://pixabay.com/get/gecbddc81b749be452d604bf954b981b388ceacf3c9a5860f892b6a59e879fa39bab7ad18b3053ac1905bd602dc18e2e9f368ada545e40a884c75212757dcca1d_1280.jpg",
              imageAlt: "Collaboration tools",
              button: {
                text: "Try Now",
                href: "contact"
              }
            },
            {
              title: "Enterprise Security",
              description: "Protect your data with advanced encryption, access controls, and compliance monitoring",
              imageSrc: "https://pixabay.com/get/gffdbf6d6febf009f9de1ad75c11c5648a73955d962fe8703fb5f3ac742d8622bc4ad6e7b46fab8d28f7734ffea0c262cd6463f12e2f7ce0d1d7b305867ac46d7_1280.jpg",
              imageAlt: "Security features",
              button: {
                text: "Security Details",
                href: "features"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Choose Your Perfect Plan"
          description="Scalable solutions designed to grow with your business needs"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "basic",
              name: "Basic Plan",
              price: "$29/month",
              imageSrc: "https://pixabay.com/get/ga93b82b521b7cd621f9a7d2ddc34f72f52d59648366ab300c66b81a66b51c1107e9d2171bdd3355bfe4bbb9c8747bd22f4e116596d164fe0c0c618ab98b161ff_1280.jpg",
              imageAlt: "Basic plan features"
            },
            {
              id: "pro",
              name: "Professional Plan",
              price: "$99/month",
              imageSrc: "https://pixabay.com/get/ga452bfbf7724c79a0d1949585bccf770c1a5235523cd2c2d683cbfdaaf771f368a8776baf374f748c89bb92c15596beecd8f65804214dd1efed2c7b47bab02dd_1280.jpg",
              imageAlt: "Pro plan features"
            },
            {
              id: "enterprise",
              name: "Enterprise Plan",
              price: "Custom Pricing",
              imageSrc: "https://pixabay.com/get/g8b5e0b4f603dac053c81592eba67636cf315568fc84b89a1277a778cabbd9200b80beaa494ac09dbfbed5ee7ee78aafb75a25d6af6476e15e67df2e7d24ed083_1280.jpg",
              imageAlt: "Enterprise plan features"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Leadership Team"
          description="The visionary minds behind our innovative SaaS platform"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              imageSrc: "https://pixabay.com/get/gb90cdf365651bc37289fa89a313dba6c331986382ff33d7d55995d0911a1a7c8623c89a356bc596ca5af8e4b1f3bb69c17cccda28450a78a57b237b31877654a_1280.jpg",
              imageAlt: "Sarah Johnson CEO",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarahjohnson" },
                { icon: "Twitter", url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO & Co-founder",
              imageSrc: "https://pixabay.com/get/g3102c015f102fd7913af02a674a3c97aacad223042efb8312d5ca27bcbef738882ba500ad4295d0c8b2c3719d1b5d41b4e627b6726171c449b81093b777024fe_1280.jpg",
              imageAlt: "Michael Chen CTO",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/michaelchen" },
                { icon: "Github", url: "https://github.com/michaelchen" }
              ]
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Head of Design",
              imageSrc: "https://pixabay.com/get/g252731079a5a1f7cc0f02bfcb41a0d04774d091363dbc8706abc3d034b972b3ec94f0c2f3251d0fe50949f7c9bb975893fd843f45d1de5d8e1819e780ff164cd_1280.jpg",
              imageAlt: "Emma Rodriguez Designer",
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/emmarodriguez" },
                { icon: "Globe", url: "https://emmarodriguez.design" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Industry Leaders"
          description="See what our customers say about their experience with our platform"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "VP of Operations",
              company: "TechCorp Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb690b99f4ab364e781cbf4401e8b010b1b81b47411186507a33ed0d9b42410fad6c9ca54f266b0872b08f20c0ef6e3b16f82d994ec54b55a22315da5c7fb0afb_1280.jpg",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Startup Founder",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga605ffbd6f81b5b1686bb1a8c48af3fd62c22d98549c6d15a7b0607c663a12b0248a53ebabc47d943eff1e28cfa9f131defcb9dcfd3ff89110abd08af8f807a4_1280.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Product Manager",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g134c90e6f2094daa5fe3fb20a22c3ba7d030c4bdc47ea830588fcb8fb7c42745e7ebd44810e2fb492b6b76ea6710981c8624c009c4dfcff7311c028bb2096058_1280.jpg",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "4",
              name: "Robert Wilson",
              role: "Director of IT",
              company: "ScaleUp Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge2a54628aadab209226a31369fe041b047fe4d7849dca095412d9de98c9c785651a17d9435094c296bcdc5ce8eec1da5d6269bb417f4543b6c9a3ce0aa9a8122_1280.jpg",
              imageAlt: "Robert Wilson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our SaaS platform and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does it take to set up the platform?",
              content: "Most customers can get up and running within 24-48 hours. Our onboarding team provides dedicated support to ensure a smooth setup process."
            },
            {
              id: "2",
              title: "Can I integrate with my existing tools?",
              content: "Yes! Our platform supports over 1000+ integrations including popular CRM, marketing, and productivity tools. We also provide REST APIs for custom integrations."
            },
            {
              id: "3",
              title: "What security measures do you have in place?",
              content: "We implement enterprise-grade security including SOC 2 compliance, end-to-end encryption, regular security audits, and 24/7 monitoring."
            },
            {
              id: "4",
              title: "Do you offer customer support?",
              content: "Absolutely! We provide 24/7 customer support via chat, email, and phone. Enterprise customers also get dedicated account managers."
            },
            {
              id: "5",
              title: "Can I cancel my subscription anytime?",
              content: "Yes, you can cancel your subscription at any time. We don't believe in long-term contracts and offer month-to-month flexibility."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights & Updates"
          description="Stay informed with the latest trends, tips, and company updates"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Product",
              title: "10 Ways AI is Transforming Business Operations",
              excerpt: "Discover how artificial intelligence is revolutionizing the way modern businesses operate and scale",
              imageSrc: "https://pixabay.com/get/g1bc89f0871595db5e25f61d1d995c90a1f7ee33727f1166c4c963f08ba278e8a60eacac57d9eec4a828b023b66c4b564d84661f0628fab9b618cae67274d8996_1280.jpg",
              imageAlt: "AI business transformation",
              authorName: "Sarah Johnson",
              authorAvatar: "https://pixabay.com/get/gb90cdf365651bc37289fa89a313dba6c331986382ff33d7d55995d0911a1a7c8623c89a356bc596ca5af8e4b1f3bb69c17cccda28450a78a57b237b31877654a_1280.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Tips",
              title: "Building High-Performance Remote Teams",
              excerpt: "Essential strategies for managing and scaling remote teams in today's digital workplace",
              imageSrc: "https://pixabay.com/get/ga38e68fbcf24c03f1a7b18b756e28cb286cd84345d80e9fd6be574e2bb61526f6487abe5f1da73cba20190bcfe0fd82aaebc71bb83a5d9c6b3880f59cb72b97b_1280.jpg",
              imageAlt: "Remote team collaboration",
              authorName: "Michael Chen",
              authorAvatar: "https://pixabay.com/get/g3102c015f102fd7913af02a674a3c97aacad223042efb8312d5ca27bcbef738882ba500ad4295d0c8b2c3719d1b5d41b4e627b6726171c449b81093b777024fe_1280.jpg",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Technology",
              title: "The Future of SaaS: Trends to Watch",
              excerpt: "Key technological trends shaping the future of Software as a Service platforms",
              imageSrc: "https://pixabay.com/get/gafbb7299f14f1d34840dfb56d999f81c6a15769ab3695d1b5dfeefe107e47abf5d81eb1a82149a9d7776883888c4776884a75d291ce6531d330af7d898b0d2e6_1280.jpg",
              imageAlt: "SaaS technology trends",
              authorName: "Emma Rodriguez",
              authorAvatar: "https://pixabay.com/get/g252731079a5a1f7cc0f02bfcb41a0d04774d091363dbc8706abc3d034b972b3ec94f0c2f3251d0fe50949f7c9bb975893fd843f45d1de5d8e1819e780ff164cd_1280.jpg",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our team to learn how our SaaS platform can help you achieve your business goals"
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Business Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your business needs...",
            rows: 4,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://pixabay.com/get/g19bbf6e57d71e2f5c572d3a7fd7be38468af809eba43af8b6756ea49c99acf1194e166179ce5c2af3cd26d8c3c37572fa25c9c9a91bb90f13b169e4483d91280_1280.jpg"
          logoText="SaaSPro"
          copyrightText="© 2024 SaaSPro, Inc. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "products" },
                { label: "Integrations", href: "features" },
                { label: "API", href: "https://api.saaspro.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "blog" },
                { label: "Careers", href: "https://careers.saaspro.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.saaspro.com" },
                { label: "Help Center", href: "faq" },
                { label: "Status", href: "https://status.saaspro.com" },
                { label: "Security", href: "https://security.saaspro.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: "Twitter", href: "https://twitter.com/saaspro", ariaLabel: "Follow us on Twitter" },
            { icon: "Linkedin", href: "https://linkedin.com/company/saaspro", ariaLabel: "Connect on LinkedIn" },
            { icon: "Github", href: "https://github.com/saaspro", ariaLabel: "View our GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}