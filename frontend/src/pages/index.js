// src/pages/index.js
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  
  export default function Home() {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <header className="text-center py-5 sm:py-20">
            <h1 className="text-3xl font-black">Welcome to my world!</h1>
            <p className="text-xl text-gray-500 mt-4 ">Explore the life of Paulie J through this website, pauliej.com</p>
          </header>
  
          <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Who?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Hello hello! I'm Paulie Jesukiewicz, coming at you via HTTP request. Little bit about me: I'm a Professional-Python-Playa and Crowned-Cloud-Captain. I can tackle just about anything you throw at me on a computer, but my true loves are suring up software security, crafting physics-defying automation, and embarking on lifelong learning escapades. I've been known for my eloquent discourse, ingenious solutions, and harmonious collaboration.</p>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                      <strong>CI/CD Security Automation:</strong> Developed a Python-based tool to automate compliance testing, leveraging Docker, Python, MySQL, and Splunk to streamline security analysis.
                  </li>
                  <li>
                      <strong>Application Revamp:</strong> Led a migration to modern architecture using Django, Vue.JS, and Azure, enhancing system performance and security by 30%.
                  </li>
                  <li>
                      <strong>Tableau Dashboard Portal:</strong> Designed a company-wide portal for Tableau dashboards, increasing user engagement and improving data accessibility.
                  </li>
                </ul>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>When I'm not diving deep into code or exploring new tech trends, you can find me tinkering at my workbench with soldering projects and Raspberry Pi experiments. I love creating DIY electronics and finding innovative ways to integrate technology into everyday life. In my downtime, I enjoy leisurely walks around Adams Morgan, soaking in the vibrant community and the occasional brainstorming session. Lifelong learning is my mantra, and I’m always on the hunt for the next big idea or project to tackle.</p>
              </CardContent>
            </Card>
          </main>
  
          <footer className="text-center py-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Contact Me</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>
                    Please feel free to <a href="https://www.linkedin.com/in/paulie-jesukiewicz-835694111/">reach out</a> if you want to collaborate or talk turkey.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </footer>
        </div>
      </div>
    );
  }
  