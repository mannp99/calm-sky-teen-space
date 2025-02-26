
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Heart, Clock, Coffee, Smile, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tips = () => {
  const categories = [
    {
      icon: Brain,
      title: "Thought Strategies",
      description: "Ways to identify and challenge anxious thoughts",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Heart,
      title: "Self-Care Practices",
      description: "Activities to help manage stress and anxiety",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: Clock,
      title: "In-the-Moment Techniques",
      description: "Quick methods to calm anxiety during social situations",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Coffee,
      title: "Lifestyle Habits",
      description: "Daily routines that can reduce overall anxiety",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Smile,
      title: "Social Skills",
      description: "Practical tips for navigating social interactions",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: ShieldCheck,
      title: "Building Resilience",
      description: "Strategies to strengthen your ability to cope with challenges",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Tips & Strategies"
        subtitle="Practical ways to manage social anxiety in your everyday life."
        image="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
        imageAlt="Teen practicing relaxation techniques"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Helpful Strategies</h2>
            <p className="text-lg text-gray-700 text-center">
              Everyone's experience with social anxiety is different. Try different approaches to find what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color.split(' ')[0]} ${category.color.split(' ')[1]}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Breathing Techniques</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Deep breathing is one of the most effective ways to calm your nervous system. Try these techniques:</p>
                  <div className="bg-skyblue-light/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">4-7-8 Breathing</h4>
                    <ol className="list-decimal ml-5 space-y-1">
                      <li>Inhale quietly through your nose for 4 seconds</li>
                      <li>Hold your breath for 7 seconds</li>
                      <li>Exhale completely through your mouth for 8 seconds</li>
                      <li>Repeat 3-4 times</li>
                    </ol>
                  </div>
                  <div className="bg-skyblue-light/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Box Breathing</h4>
                    <ol className="list-decimal ml-5 space-y-1">
                      <li>Inhale for 4 seconds</li>
                      <li>Hold for 4 seconds</li>
                      <li>Exhale for 4 seconds</li>
                      <li>Hold for 4 seconds</li>
                      <li>Repeat the pattern</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Challenging Negative Thoughts</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>Our thoughts strongly influence how we feel. Learn to identify and challenge anxious thoughts:</p>
                  <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Identify the thought</h4>
                      <p>Notice when you're having anxious thoughts like "Everyone will laugh at me" or "I'll say something stupid."</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Question the evidence</h4>
                      <p>Ask yourself: "What proof do I have that this will happen? Has this actually happened before or am I assuming the worst?"</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Consider alternatives</h4>
                      <p>Think about other possible outcomes: "Maybe people will be interested in what I have to say" or "Everyone makes mistakes sometimes."</p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Gradual Exposure</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Gradually facing your fears can help reduce anxiety over time. The key is to start small and work your way up:
                  </p>
                  <div className="bg-skyblue-light/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Create an anxiety ladder</h4>
                    <p className="mb-2">List social situations from least scary to most scary. For example:</p>
                    <ol className="list-decimal ml-5 space-y-1">
                      <li>Saying hello to a classmate</li>
                      <li>Asking a question in a small group</li>
                      <li>Joining a lunch table conversation</li>
                      <li>Speaking up in class</li>
                      <li>Giving a short presentation</li>
                    </ol>
                    <p className="mt-2">Start with the easiest item and gradually work your way up as you build confidence.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">Healthy Lifestyle Habits</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Regular Exercise</h4>
                      <p>Even 20-30 minutes of physical activity can significantly reduce anxiety by releasing endorphins and reducing stress hormones.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Consistent Sleep</h4>
                      <p>Try to maintain a regular sleep schedule. Poor sleep can worsen anxiety symptoms.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Balanced Nutrition</h4>
                      <p>Limit caffeine and sugar, which can increase feelings of anxiety. Stay hydrated and eat regular meals.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-1">Digital Breaks</h4>
                      <p>Take regular breaks from social media, which can increase social comparison and anxiety.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">Mindfulness Practices</AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-4">
                  <p>
                    Mindfulness helps bring your attention to the present moment instead of worrying about the past or future.
                  </p>
                  <div className="bg-skyblue-light/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">5-4-3-2-1 Grounding Technique</h4>
                    <p>When anxiety strikes, focus on your senses:</p>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>5 things you can see</li>
                      <li>4 things you can touch/feel</li>
                      <li>3 things you can hear</li>
                      <li>2 things you can smell</li>
                      <li>1 thing you can taste</li>
                    </ul>
                  </div>
                  <p>
                    Try free mindfulness apps designed for teens, like Headspace, Calm, or Smiling Mind for guided practices.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding bg-skyblue-light/20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need more personalized support?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                While these tips can help, sometimes you need to talk to someone. Reaching out for help is a sign of strength, not weakness.
              </p>
              <Link to="/contact">
                <Button className="bg-skyblue hover:bg-skyblue-dark text-white">
                  Contact Us For Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
