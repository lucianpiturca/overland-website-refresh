import { Link } from "react-router-dom";
import { ArrowRight, Truck, Package, Clock, MapPin, Shield, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Truck,
    title: "Full Truck Load (FTL)",
    description: "Dedicated trucks for large shipments. Ideal for businesses with high-volume cargo that requires exclusive transport.",
    features: ["Direct point-to-point delivery", "Maximum cargo security", "Faster transit times"],
  },
  {
    icon: Package,
    title: "Less Than Truck Load (LTL)",
    description: "Cost-effective solution for smaller shipments. Share truck space with other shippers without compromising on service.",
    features: ["Cost-effective for smaller loads", "Flexible scheduling", "European coverage"],
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical shipments require special attention. Our express service ensures your urgent cargo arrives on schedule.",
    features: ["Priority handling", "Guaranteed delivery windows", "Real-time tracking"],
  },
  {
    icon: MapPin,
    title: "Cross-Border Transport",
    description: "Seamless logistics across European borders. We handle customs, documentation, and ensure smooth transit.",
    features: ["Customs clearance support", "Multi-country routing", "Regulatory compliance"],
  },
  {
    icon: Shield,
    title: "Specialized Cargo",
    description: "Fragile, temperature-sensitive, or oversized cargo? We have the equipment and expertise to handle it all.",
    features: ["Temperature-controlled options", "Specialized equipment", "Careful handling"],
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Every business is unique. We design tailored logistics solutions that perfectly match your requirements.",
    features: ["Dedicated account manager", "Custom routing", "Flexible contracts"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From full truck loads to specialized cargo handling, we offer comprehensive 
              transport solutions designed to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 group h-full"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Our team is ready to design a logistics solution that perfectly fits your business needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
