
import { Hero } from "@/components/Hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is social anxiety disorder?",
      answer: "Social anxiety disorder is more than just shyness. It's a mental health condition characterized by intense fear of social or performance situations where you might be judged, embarrassed, or rejected. For teens, this can make everyday activities like attending school, participating in class, or hanging out with friends extremely difficult."
    },
    {
      question: "Is social anxiety common among teenagers?",
      answer: "Yes, social anxiety is quite common among teenagers. It affects approximately 9.1% of adolescents, making it one of the most common mental health issues in this age group. The teenage years often involve increased social pressure and self-consciousness, which can contribute to social anxiety."
    },
    {
      question: "How is social anxiety different from normal teenage shyness?",
      answer: "While many teenagers experience shyness or nervousness in certain social situations, social anxiety disorder is more severe and persistent. It causes significant distress and interferes with daily activities. The anxiety is out of proportion to the actual threat posed by the social situation."
    },
    {
      question: "Can social anxiety go away on its own?",
      answer: "For some people, particularly those with milder symptoms, social anxiety may improve as they grow and develop coping skills. However, for many others, especially those with more severe symptoms, social anxiety often doesn't go away on its own and may require treatment. Early intervention typically leads to better outcomes."
    }
  ];

  const treatmentFaqs = [
    {
      question: "What treatments are available for social anxiety?",
      answer: "Effective treatments for social anxiety include cognitive-behavioral therapy (CBT), which helps you identify and challenge negative thought patterns; exposure therapy, which gradually helps you face feared situations; social skills training; and in some cases, medication. Many teens benefit from a combination of these approaches."
    },
    {
      question: "How long does it take to overcome social anxiety?",
      answer: "The timeline for improvement varies greatly depending on the severity of symptoms, the type of treatment, and individual factors. Some teens notice improvements within a few weeks of starting therapy, while others may take months to see significant changes. Remember that progress often happens gradually and may include ups and downs."
    },
    {
      question: "Can I help myself without professional treatment?",
      answer: "While professional help is often recommended, there are many self-help strategies that can be effective, especially for milder symptoms. These include practicing relaxation techniques, gradually exposing yourself to feared situations, challenging negative thoughts, maintaining a healthy lifestyle, and building a support network. Our Tips page offers many practical strategies."
    }
  ];

  const parentsFaqs = [
    {
      question: "How can I talk to my parents about my social anxiety?",
      answer: "Choose a quiet, private time when neither of you are rushed or stressed. Be honest about your feelings and specific situations that are difficult for you. If you're uncomfortable talking face-to-face, consider writing a letter or email. Use 'I' statements like 'I feel anxious when...' rather than generalizations. Remember that your parents may not understand at first, but most want to help."
    },
    {
      question: "What if my parents don't understand or take my anxiety seriously?",
      answer: "This can be frustrating and disappointing. Try sharing specific examples of how anxiety affects your life or educational resources about social anxiety. Consider involving another trusted adult (school counselor, relative, family doctor) who can help explain the situation to your parents. Remember that some adults may not be familiar with anxiety disorders or may mistake them for normal teenage behavior."
    },
    {
      question: "How can parents help a teen with social anxiety?",
      answer: "Parents can help by educating themselves about social anxiety, listening without judgment, avoiding pushing too hard or enabling avoidance, seeking professional help when needed, celebrating small successes, modeling healthy social behavior, and maintaining open communication. Small, consistent support often works better than big interventions."
    }
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about social anxiety in teenagers."
        image="/placeholder.svg"
        imageAlt="Teen thinking about questions"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-g-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Treatment & Recovery</h2>
            <Accordion type="single" collapsible className="w-full">
              {treatmentFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-t-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Parents & Support</h2>
            <Accordion type="single" collapsible className="w-full">
              {parentsFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-p-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding bg-skyblue-light/20">
        <div className="container-custom">
          <Card className="border-0 shadow-md p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help. If you didn't find the answer you're looking for, please don't hesitate to reach out directly.
              </p>
              <Link to="/contact">
                <Button className="bg-skyblue hover:bg-skyblue-dark text-white">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
