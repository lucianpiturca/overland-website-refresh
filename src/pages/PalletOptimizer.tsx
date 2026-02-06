import { Link } from "react-router-dom";
import { ArrowRight, Box, BarChart3, Maximize2, Layers, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const features = [
  {
    icon: Box,
    title: "3D Visualization",
    description: "See exactly how your cargo will be arranged in the truck with interactive 3D models.",
  },
  {
    icon: BarChart3,
    title: "Space Optimization",
    description: "Maximize truck capacity and reduce the number of trips needed for your shipments.",
  },
  {
    icon: Maximize2,
    title: "Custom Dimensions",
    description: "Input exact pallet dimensions and weight to get accurate loading configurations.",
  },
  {
    icon: Layers,
    title: "Multi-Stack Planning",
    description: "Optimize stacking patterns while respecting weight limits and fragility requirements.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get optimized loading plans in seconds, saving hours of manual planning.",
  },
  {
    icon: RefreshCw,
    title: "Multiple Scenarios",
    description: "Compare different loading configurations to find the best solution for your needs.",
  },
];

const PalletOptimizer = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Box className="h-4 w-4" />
              Innovative Technology
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              3D Pallet <span className="text-primary">Optimizer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our advanced 3D Pallet Optimizer tool helps you maximize cargo space, 
              reduce shipping costs, and plan efficient loading configurations for every shipment.
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <a href="https://lovable.dev/projects/YOUR_PROJECT_ID" target="_blank" rel="noopener noreferrer">
                Try the Optimizer <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple steps to optimize your pallet loading and maximize efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Input Dimensions</h3>
                <p className="text-muted-foreground">
                  Enter your pallet sizes, weights, and truck dimensions into the system.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Optimize</h3>
                <p className="text-muted-foreground">
                  Our algorithm calculates the most efficient arrangement for your cargo.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Visualize & Export</h3>
                <p className="text-muted-foreground">
                  View the 3D arrangement and export loading instructions for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="text-primary">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Why Use Our Optimizer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
              <div>
                <div className="text-4xl font-bold mb-2">30%</div>
                <p className="text-primary-foreground/80">Average space savings</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <p className="text-primary-foreground/80">Reduction in planning time</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20%</div>
                <p className="text-primary-foreground/80">Lower shipping costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us to learn more about our 3D Pallet Optimizer and how it can benefit your business.
          </p>
          <Button size="lg" asChild className="text-lg px-8">
            <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PalletOptimizer;
