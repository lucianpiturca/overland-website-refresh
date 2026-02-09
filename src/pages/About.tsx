import { Users, Target, Award, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const stats = [
  { icon: Truck, value: "100+", label: "Deliveries Monthly" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "2022", label: "Founded" },
  { icon: Target, value: "100%", label: "On-Time Delivery" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Overland Transport</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2022 in Oradea, Romania, we provide reliable and efficient goods transport 
              across Europe and the UK. Our success is driven by a team of dedicated professionals 
              who bring expertise and passion to every aspect of our operation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-0 card-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Team</span>
            </h2>
            
            <div className="space-y-8">
              <Card className="border-0 card-shadow">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Logistics Specialists</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our logistics experts work tirelessly to plan and optimize every route, 
                    ensuring your cargo takes the most efficient path to its destination. 
                    With years of experience in European transport networks, they handle 
                    complex logistics with ease.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 card-shadow">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Skilled Drivers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our drivers are the backbone of our operation. Each driver undergoes 
                    rigorous training to handle goods of all types with the utmost care. 
                    They're not just drivers – they're professionals committed to delivering 
                    your goods safely and on time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 card-shadow">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4 text-primary">Customer Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our friendly customer service representatives are always ready to assist you. 
                    Whether you have questions about your shipment, need to arrange a delivery, 
                    or want to discuss custom logistics solutions, we're here to help.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            At Overland Transport, we don't just move goods – we move businesses forward. 
            Our mission is to provide efficient, reliable, and sustainable transport solutions 
            that help our clients succeed. We believe in building lasting partnerships based 
            on trust, transparency, and exceptional service.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
