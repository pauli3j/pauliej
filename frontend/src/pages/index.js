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
          <header className="text-center py-10 sm:py-20">
            <h1 className="text-3xl font-black">Welcome to my world!</h1>
            <p className="text-xl text-gray-500 mt-4 ">Explore the life of Paulie J through this website, pauliej.com</p>
          </header>
  
          <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Proficient in Python full-stack web development and Cloud solutions (AWS and Azure). Skilled in security assessment, building tools for automation, and basic penetration testing. Excellent communicator, problem solver, and collaborative team player.</p>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the various projects I've worked on, from web development to cybersecurity.</p>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover my hobbies and interests outside of work, including Raspberry Pi projects and leisurely walks.</p>
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
  