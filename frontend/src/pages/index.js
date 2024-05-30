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
                <p>Hello hello! I'm Paulie Jesukiewicz, and I'm here to chat tech. I'm a whiz with Python and a maestro of the cloud. I can handle just about anything on a computer, but my true passions are fortifying software security, crafting mind-blowing automation, and constantly learning new things. People know me for my articulate communication, clever solutions, and collaborative spirit.</p>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Career</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>
                      <strong>CI/CD Security Automation:</strong> Built a Python tool that automates compliance testing. It uses Docker, Python, MySQL, and Splunk to make security analysis a breeze.
                  </li>
                  <li>
                      <strong>Application Revamp:</strong> Spearheaded a migration to modern architecture with Django, Vue.JS, and Azure, boosting system performance and security.
                  </li>
                  <li>
                      <strong>Tableau Dashboard Portal:</strong> Created a company-wide portal for Tableau dashboards, making data more accessible and increasing user engagement.
                  </li>
                </ul>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>When I'm not deep in code or exploring the latest tech trends, you can find me at my workbench, soldering and experimenting with Raspberry Pi projects. I love DIY electronics and discovering new ways to blend technology into everyday life. I also enjoy leisurely walks around Adams Morgan, soaking up the community vibes and brainstorming my next big idea. Lifelong learning is my mantra, and I'm always on the lookout for exciting new projects.</p>
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
  