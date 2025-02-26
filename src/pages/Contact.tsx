
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
    }, 1500);
  };

  const contactOptions = [
    {
      icon: Phone,
      title: "Crisis Helpline",
      content: "(800) 273-8255",
      subtitle: "Available 24/7",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "support@becalmteen.org",
      subtitle: "We'll respond within 48 hours",
      color: "bg-skyblue-light text-skyblue"
    },
    {
      icon: MessageSquare,
      title: "Text Support",
      content: "Text HOME to 741741",
      subtitle: "For crisis text line",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Contact Us"
        subtitle="Reach out for support, questions, or more information about social anxiety."
        image="/placeholder.svg"
        imageAlt="Support team helping teens"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-700">
              Have questions or need support? We're here to help. Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full ${option.color}`}>
                    <option.icon className="h-7 w-7" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-medium">{option.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-100 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-skyblue-light/50 text-skyblue rounded-full p-2">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-center text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-skyblue hover:bg-skyblue-dark" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 text-center">
                <p>
                  Your information is protected and will only be used to respond to your inquiry.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-skyblue-light/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Important Note About Emergencies</h3>
              <div className="p-4 bg-red-50 text-red-700 rounded-lg mb-4">
                <p className="font-medium">
                  If you're experiencing a mental health emergency or having thoughts of harming yourself, please:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Call 911 or your local emergency number immediately</li>
                  <li>Go to your nearest emergency room</li>
                  <li>Call the National Suicide Prevention Lifeline at 988 or 1-800-273-8255</li>
                  <li>Text HOME to 741741 to reach the Crisis Text Line</li>
                </ul>
              </div>
              <p>
                Remember, reaching out for help is a sign of strength. You don't have to face social anxiety or any other mental health challenge alone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
