"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Globe, Github, HeadphonesIcon, HelpCircle, Linkedin, Package, Paintbrush, Palette, Settings, Smartphone, Star, Trophy, Twitter, Users, Wrench } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Templates", id: "products" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://pixabay.com/get/gdd9a111a4d3f43d6f48689dfbd27a239c38e46da017d9d1698c4df7754e48b6ee023c753d32c02e63eec42c9f1352eda63d932467d288462d742b7ee21b1c36b_1280.jpg"
          logoAlt="TemplateHub Logo"
          brandName="TemplateHub"
          button={{
            text: "Browse Templates",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="I will go today"
          description="Premium website templates for modern businesses, startups, and creative professionals"
          buttons={[
            { text: "Browse Templates", href: "products" },
            { text: "Start Free Trial", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g52589c5be851082b31121e531b11ff14e905fb8cda5cedabfcca8ada9b558cc909c1c918862abc2b181195cb19a8f92a15265fc913b689a8574460bbe46fcc86_1280.jpg"
          imageAlt="Web design workspace background"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Our Templates"
          description="We create premium website templates that help businesses establish a strong online presence with modern design and powerful functionality"
          tag="About Us"
          tagIcon={Trophy}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Professional Design",
              description: "Hand-crafted templates designed by experienced professionals",
              icon: Paintbrush
            },
            {
              title: "Easy Customization",
              description: "Simple to customize with your brand colors and content",
              icon: Settings
            },
            {
              title: "Responsive Layout",
              description: "Perfect display on all devices from mobile to desktop",
              icon: Smartphone
            },
            {
              title: "Premium Support",
              description: "Dedicated support team to help you succeed",
              icon: HeadphonesIcon
            }
          ]}
          imageSrc="https://pixabay.com/get/gae5284fd209cb6dc1adff42ba2c5a7602a9a7dcdf9a9aacc509482c66224df37dd208e6ee055f904c30bc15c322d5d86b6cf46d7e8855c6c78fcae9413a90139_1280.jpg"
          imageAlt="Web design team workspace"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything You Need to Succeed"
          description="Our templates come packed with features that help you create stunning websites quickly"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Modern Design",
              description: "Contemporary layouts with clean aesthetics and professional typography",
              icon: Palette,
              button: { text: "View Designs", href: "products" }
            },
            {
              title: "Mobile Responsive",
              description: "Perfect display across all devices with responsive grid systems",
              icon: Smartphone,
              button: { text: "Test Mobile", href: "products" }
            },
            {
              title: "Easy Customization",
              description: "Modify colors, fonts, and layouts without coding knowledge",
              icon: Wrench,
              button: { text: "Customize Now", href: "contact" }
            },
            {
              title: "Premium Support",
              description: "Get help from our expert team whenever you need assistance",
              icon: HeadphonesIcon,
              button: { text: "Get Support", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Popular Website Templates"
          description="Browse our collection of premium templates designed for different industries and purposes"
          tag="Templates"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "business-pro",
              name: "Business Pro Template",
              price: "$49",
              imageSrc: "https://pixabay.com/get/gdb55215ec0a2c39b55960e35c1b4747fb15b754337daa4116b94a3498108c407563c0122b1b9df2551439f57cf0a4d97139755773635b495945adc91a4d69394_1280.jpg",
              imageAlt: "Business website template preview"
            },
            {
              id: "portfolio-creative",
              name: "Creative Portfolio",
              price: "$39",
              imageSrc: "https://pixabay.com/get/g4848c9b4494a3d525a7d236c84447871d1f4bcc8655aba44bd0c9fbfc22ac59715873ceecb4883c0d6edd088cade315b2d33f0f896989ef0ecb7664203e8ac79_1280.jpg",
              imageAlt: "Portfolio website template preview"
            },
            {
              id: "ecommerce-store",
              name: "E-commerce Store",
              price: "$69",
              imageSrc: "https://pixabay.com/get/gf8cc905a34f0f33ad4f80daed4993c6080e19563b50f39f5b83321faa26b7e3b3a370dd1a2f0425c54b84265ff69a6b3147002d4ac8ac90f412b98d6fe77061e_1280.jpg",
              imageAlt: "E-commerce website template preview"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Creative Team"
          description="The talented designers and developers behind our premium templates"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Founder & Designer",
              description: "Leading the design vision with 8+ years of experience in web design and user experience",
              imageSrc: "https://pixabay.com/get/gbaadbb65a6c1c288aa8ed68c8e093f004b70ec708017f76cbc66b5046a2ce58f39c51d03d280303801164b207b223cb2925a4bb1ff2b357e0e83ee6fe998365a_1280.jpg",
              imageAlt: "Sarah Johnson portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarahjohnson" },
                { icon: Twitter, url: "https://twitter.com/sarahjohnson" }
              ]
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Lead Developer",
              description: "Expert in modern web technologies with a passion for clean, efficient code",
              imageSrc: "https://pixabay.com/get/g34191648dc8995e50751cc773597cbe08971fbe120ad6b8c61f54b01bc2da5a8a385fc04e7124c99fc84a91d1a69416b84022390f3d2619631615dcb109968c2_1280.jpg",
              imageAlt: "Mike Chen portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/mikechen" },
                { icon: Github, url: "https://github.com/mikechen" }
              ]
            },
            {
              id: "3",
              name: "Alex Rivera",
              role: "UI/UX Designer",
              description: "Creating intuitive user experiences with attention to detail and user-centered design",
              imageSrc: "https://pixabay.com/get/ge35f20c2d69f8cf6abca0e6198fea729b69293ca7febbfc6040b3e1bffd1b95ebdc18185809d7ccf236c02dfd4b4bb24f12a619364aca7abb4b29f985eb2660e_1280.jpg",
              imageAlt: "Alex Rivera portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/alexrivera" },
                { icon: Globe, url: "https://alexrivera.design" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="See how our templates have helped businesses and professionals create amazing websites"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              handle: "@jenmartinez",
              testimonial: "The templates are absolutely gorgeous and so easy to customize. Saved me weeks of development time!",
              imageSrc: "https://pixabay.com/get/g4dfac112987a5164f101effce154877fc68e9e143583c49d9aa32487597bcff938586f1dcfb2f2d97da9c717517818b8a6064a293889bddb1b0dad9688128950_1280.jpg",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "David Kim",
              handle: "@davidk_dev",
              testimonial: "Outstanding quality and attention to detail. The customer support is also top-notch.",
              imageSrc: "https://pixabay.com/get/g516b26580aefc5c321f00eec3efb5cc52b91392e955b4cdcd118cccb72d69428154b0a3d4365be07d8f9794503b5d7d85fb90da4524c016bf0a4585aa8b80064_1280.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              handle: "@lisathompson",
              testimonial: "These templates helped me launch my business website in just a few days. Highly recommended!",
              imageSrc: "https://pixabay.com/get/gdeaea7a8d50884331342c0cdea36a068eec071192ae2cbd79a32c91a21f0ca6279fcde3a835cd432f1b6dcb1602bddf12c5aacef501944973320e2e5f067f3b7_1280.jpg",
              imageAlt: "Lisa Thompson"
            },
            {
              id: "4",
              name: "Robert Wilson",
              handle: "@rwilson_web",
              testimonial: "Professional designs that look amazing on all devices. Perfect for my client projects.",
              imageSrc: "https://pixabay.com/get/g2686751996d2b950a5641a2cf7da4074ec5fa61870ca1b1a0c1e2f19eb5a90f21f96f456020b555f844ba0b01e326ae1ff89172e70b933a4551b1d0d47d5589d_1280.jpg",
              imageAlt: "Robert Wilson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our website templates and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need coding skills to use these templates?",
              content: "No coding skills required! Our templates are designed to be easily customizable through simple configuration files and visual editors."
            },
            {
              id: "2",
              title: "Are the templates mobile responsive?",
              content: "Yes, all our templates are fully responsive and optimized for mobile, tablet, and desktop devices with modern CSS Grid and Flexbox layouts."
            },
            {
              id: "3",
              title: "What kind of support do you provide?",
              content: "We offer comprehensive documentation, video tutorials, and direct email support. Premium customers get priority support with faster response times."
            },
            {
              id: "4",
              title: "Can I use these templates for commercial projects?",
              content: "Yes, our templates come with commercial licensing that allows you to use them for client projects and commercial websites."
            },
            {
              id: "5",
              title: "How often do you release new templates?",
              content: "We release new templates monthly and regularly update existing ones with new features and improvements based on user feedback."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Design Insights"
          description="Stay updated with the latest web design trends, tips, and industry insights"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Design Trends",
              title: "10 Web Design Trends Dominating 2024",
              excerpt: "Discover the latest design trends that are shaping modern websites and how to implement them effectively",
              imageSrc: "https://pixabay.com/get/g2ecbbe8195cf55bae5de0ff7e7e92d625a7d2a5f16ad002718925b4ff7d6717027b5f2416b7c01aee901bb29b8d2870147d7ec54f9009795e579932d769bca3a_1280.jpg",
              imageAlt: "Web design trends workspace",
              authorName: "Sarah Johnson",
              authorAvatar: "https://pixabay.com/get/gbaadbb65a6c1c288aa8ed68c8e093f004b70ec708017f76cbc66b5046a2ce58f39c51d03d280303801164b207b223cb2925a4bb1ff2b357e0e83ee6fe998365a_1280.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Development",
              title: "Building Faster Websites: Performance Tips",
              excerpt: "Essential techniques for optimizing website performance and improving user experience",
              imageSrc: "https://pixabay.com/get/g9e0f8a47ce7463dcfa8d1b9922d3fb1468261f1eae7800e2ecda1243cd04563a6b743d2e51918fdd4977a071a8fe4cae55b14e7747359563399c61d42cce1f11_1280.jpg",
              imageAlt: "Website development team",
              authorName: "Mike Chen",
              authorAvatar: "https://pixabay.com/get/g34191648dc8995e50751cc773597cbe08971fbe120ad6b8c61f54b01bc2da5a8a385fc04e7124c99fc84a91d1a69416b84022390f3d2619631615dcb109968c2_1280.jpg",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Business",
              title: "How to Choose the Right Template for Your Business",
              excerpt: "A comprehensive guide to selecting website templates that align with your business goals",
              imageSrc: "https://pixabay.com/get/g8f9ccbfdf23663a15e997cf90e295277b03624a85931ed6529230423f6dd5a3d5e24851107c0ba9582d1b4ce69f5fb5a7b84f122710e138ee76ce7a67fb286f8_1280.jpg",
              imageAlt: "Business strategy planning",
              authorName: "Alex Rivera",
              authorAvatar: "https://pixabay.com/get/ge35f20c2d69f8cf6abca0e6198fea729b69293ca7febbfc6040b3e1bffd1b95ebdc18185809d7ccf236c02dfd4b4bb24f12a619364aca7abb4b29f985eb2660e_1280.jpg",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Get Started?"
          description="Contact us today to discuss your project needs or get help choosing the perfect template"
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "project", type: "text", placeholder: "Project Type", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project requirements...",
            rows: 4,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://pixabay.com/get/gdd9a111a4d3f43d6f48689dfbd27a239c38e46da017d9d1698c4df7754e48b6ee023c753d32c02e63eec42c9f1352eda63d932467d288462d742b7ee21b1c36b_1280.jpg"
          logoText="TemplateHub"
          copyrightText="© 2024 TemplateHub. All rights reserved."
          columns={[
            {
              title: "Templates",
              items: [
                { label: "Business", href: "products" },
                { label: "Portfolio", href: "products" },
                { label: "E-commerce", href: "products" },
                { label: "Landing Pages", href: "products" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "https://docs.templatehub.com" },
                { label: "Tutorials", href: "blog" },
                { label: "Support", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "blog" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "https://careers.templatehub.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}