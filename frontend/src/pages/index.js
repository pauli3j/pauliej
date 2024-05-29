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
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="text-center py-20">
            <h1 className="text-5xl font-bold mb-6">Welcome to my world!</h1>
            <p className="text-lg text-gray-700">Explore the life of Paulie J through this website, pauliej.com</p>
          </header>
  
          <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about my background, experience, and skills.</p>
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
                    Feel free to reach out if you want to collaborate or just chat!
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </footer>
        </div>
      </div>
    );
  }
  