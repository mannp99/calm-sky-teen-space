
import { Hero } from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SocialAnxiety = () => {
  return (
    <div className="animate-fade-in">
      <Hero
        title="Understanding Social Anxiety"
        subtitle="Learn about social anxiety, its symptoms, and how it impacts teenagers."
        image="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        imageAlt="Teen experiencing social anxiety"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="what-is-it" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="what-is-it">What Is It?</TabsTrigger>
                <TabsTrigger value="symptoms">Common Symptoms</TabsTrigger>
                <TabsTrigger value="teen-impact">Impact on Teens</TabsTrigger>
              </TabsList>
              
              <TabsContent value="what-is-it" className="animate-slide-up">
                <Card>
                  <CardHeader>
                    <CardTitle>What is Social Anxiety?</CardTitle>
                    <CardDescription>
                      Understanding the basics of social anxiety disorder
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Social anxiety disorder (SAD) is more than just shyness. It's an intense fear of social situations where you might be judged, embarrassed, or rejected.
                    </p>
                    <p>
                      For teenagers, this can make everyday activities like attending school, participating in class, or hanging out with friends extremely difficult and stressful.
                    </p>
                    <p>
                      Social anxiety is a common mental health condition that typically begins during the teenage years when social interactions and peer relationships become increasingly important.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-2">Key facts about social anxiety:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>It affects approximately 9.1% of adolescents</li>
                      <li>It's the third most common mental health disorder</li>
                      <li>Without treatment, it can continue into adulthood</li>
                      <li>It's highly treatable with appropriate support</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="symptoms" className="animate-slide-up">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Symptoms</CardTitle>
                    <CardDescription>
                      Physical and emotional signs of social anxiety
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium text-skyblue mb-3">Physical Symptoms</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Racing heart or palpitations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Trembling or shaking</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Sweating</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Upset stomach or nausea</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Dizziness or lightheadedness</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Shortness of breath</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-skyblue mb-3">Emotional & Behavioral Signs</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Intense fear of judgment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Avoiding social situations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Excessive worry before social events</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Overthinking interactions afterward</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Fear of embarrassment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-skyblue-light/50 text-skyblue rounded-full p-1 mr-2 mt-0.5">•</span>
                            <span>Low self-esteem or self-doubt</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-start border-t pt-6 mt-4">
                    <p className="text-sm text-gray-500">
                      Remember: Having some of these symptoms doesn't automatically mean you have social anxiety disorder. If you're concerned, it's important to talk to a trusted adult or healthcare professional.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="teen-impact" className="animate-slide-up">
                <Card>
                  <CardHeader>
                    <CardTitle>Impact on Teenagers</CardTitle>
                    <CardDescription>
                      How social anxiety affects teenage life and development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg bg-skyblue-light/30 p-4 border border-skyblue-light">
                      <h3 className="text-lg font-medium mb-2">Academic Challenges</h3>
                      <p>Social anxiety can make it difficult to participate in class, give presentations, ask questions, or work in groups - all crucial parts of school life.</p>
                    </div>
                    
                    <div className="rounded-lg bg-skyblue-light/30 p-4 border border-skyblue-light">
                      <h3 className="text-lg font-medium mb-2">Social Development</h3>
                      <p>Avoiding social situations can limit opportunities to develop friendships and social skills that are essential for future relationships and career success.</p>
                    </div>
                    
                    <div className="rounded-lg bg-skyblue-light/30 p-4 border border-skyblue-light">
                      <h3 className="text-lg font-medium mb-2">Daily Activities</h3>
                      <p>Simple tasks like ordering food, answering the phone, or using public restrooms can become sources of intense anxiety.</p>
                    </div>
                    
                    <div className="rounded-lg bg-skyblue-light/30 p-4 border border-skyblue-light">
                      <h3 className="text-lg font-medium mb-2">Online Interactions</h3>
                      <p>Even in digital spaces, social anxiety can affect how teens engage with social media and online communication.</p>
                    </div>
                    
                    <div className="rounded-lg bg-skyblue-light/30 p-4 border border-skyblue-light">
                      <h3 className="text-lg font-medium mb-2">Identity Formation</h3>
                      <p>The teen years are crucial for developing a sense of self, and social anxiety can interfere with this process by limiting exploration and self-expression.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="stories" className="section-padding bg-skyblue-light/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teen Stories</h2>
            <p className="text-lg text-gray-700">
              Real experiences from teenagers who are managing social anxiety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-0 shadow">
              <CardHeader>
                <CardTitle>Jamie's Story</CardTitle>
                <CardDescription>16 years old</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-600">
                  "I always felt like everyone was watching me, judging every word I said. School presentations were my worst nightmare. But with therapy and the support of my best friend, I've learned that most people are too focused on themselves to analyze my every move. I still get nervous, but now I know how to manage it."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow">
              <CardHeader>
                <CardTitle>Alex's Journey</CardTitle>
                <CardDescription>14 years old</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-600">
                  "I used to skip school when I knew there would be group work. My heart would race, and I'd feel sick just thinking about having to speak up. My parents helped me find a counselor, and I've been using breathing techniques and cognitive strategies. It's not perfect, but I'm making progress every day."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialAnxiety;
