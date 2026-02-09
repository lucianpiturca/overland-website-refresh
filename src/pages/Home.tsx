import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Clock, Cog, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-transport.jpg";

const features = [
  {
    icon: Clock,
    title: "Reliable Transportation",
    description: "Trust your cargo to us for consistent and on-time deliveries. Our commitment ensures your goods reach their destination without delays.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize cargo safety with a modern fleet equipped with state-of-the-art safety features and experienced drivers.",
  },
  {
    icon: Cog,
    title: "Tailored Solutions",
    description: "Flexible and customized solutions for every business. From dedicated routes to expedited deliveries.",
  },
  {
    icon: Truck,
    title: "Cutting-edge Technology",
    description: "Advanced tracking systems allow you to monitor your cargo in real-time for transparency and peace of mind.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "We invest in eco-friendly practices and fuel-efficient technologies, minimizing our environmental impact.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Premier Goods<br />
            <span className="text-primary">Transport Solution</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Serving all across Europe and the UK since 2022. Efficiency, reliability, and 100% on-time delivery 
            define our services. Whether you're moving raw materials, finished products, or fragile cargo – we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Overland Transport?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver seamless logistics solutions tailored to meet the unique needs of businesses like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience the Overland Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            From small businesses to large corporations with complex logistics needs – we're here to help.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
            At Overland Transport, we don't just move goods – <br className="hidden md:block" />
            <span className="text-primary">we move businesses forward.</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
