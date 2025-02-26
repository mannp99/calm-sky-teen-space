
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Understanding Social Anxiety",
      description: "Learn what social anxiety is and how it affects teenagers in their daily lives.",
      link: "/social-anxiety"
    },
    {
      icon: Heart,
      title: "Self-Care Strategies",
      description: "Discover practical techniques to manage anxiety and build confidence in social situations.",
      link: "/tips"
    },
    {
      icon: Users,
      title: "You're Not Alone",
      description: "Connect with stories from other teens and understand that many people face similar challenges.",
      link: "/social-anxiety#stories"
    },
    {
      icon: MessageSquare,
      title: "Getting Support",
      description: "Find resources and learn how to reach out for help when you need it.",
      link: "/contact"
    }
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="You're Not Alone With Social Anxiety"
        subtitle="A safe space for teens to understand, manage, and overcome social anxiety together."
        buttonText="Learn More"
        buttonLink="/social-anxiety"
        image="/placeholder.svg"
        imageAlt="Teenagers supporting each other"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Can Help</h2>
            <p className="text-lg text-gray-700">
              BeCalmTeen provides resources, tips, and support specifically designed for teenagers dealing with social anxiety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-skyblue-light/50 text-skyblue">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <Link to={feature.link}>
                    <Button variant="link" className="p-0 text-skyblue hover:text-skyblue-dark">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-skyblue-light/30">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="uppercase tracking-wide text-sm text-skyblue font-semibold">Did you know?</div>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Social anxiety affects about 9.1% of adolescents
                </h3>
                <p className="mt-4 text-gray-600">
                  You're not alone in your struggles. Social anxiety is one of the most common mental health issues among teenagers. Understanding it is the first step to managing it.
                </p>
                <div className="mt-6">
                  <Link to="/social-anxiety">
                    <Button className="bg-skyblue hover:bg-skyblue-dark text-white">
                      Learn About Social Anxiety
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-12">
                <img 
                  src="/placeholder.svg" 
                  alt="Teens supporting each other" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
