import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, RefreshCw, Image, Lock, Calendar, Sparkles, LogOut } from "lucide-react";
import { useAuthContext } from "@/feature/authentication/model/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Header with Auth */}
      {user && (
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      )}
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Personal Memory Vault</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Never Lose a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Precious Memory
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Store your photos and videos in the cloud, and automatically rediscover random memories 
            whenever you want. Perfect for when your device storage is full.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
            {user ? (
              <Button size="lg" className="text-base shadow-soft hover:shadow-lg transition-all">
                Upload Memories
              </Button>
            ) : (
              <>
                <Button 
                  size="lg" 
                  className="text-base shadow-soft hover:shadow-lg transition-all"
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Everything You Need to Preserve Memories
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Easy Upload</h3>
            <p className="text-muted-foreground">
              Upload your photos and videos with a simple drag-and-drop interface. 
              Support for all common media formats.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Auto Refetch</h3>
            <p className="text-muted-foreground">
              Automatically fetch random memories at your chosen frequency—daily, 
              weekly, or monthly.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Image className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Albums</h3>
            <p className="text-muted-foreground">
              Organize your media in albums with search and filter capabilities. 
              Preview images and play videos in-app.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Secure Storage</h3>
            <p className="text-muted-foreground">
              Your memories are protected with secure authentication and HTTPS 
              connections. Your data, your control.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Scheduling</h3>
            <p className="text-muted-foreground">
              Customize your refetch preferences and storage limits. Manual triggers 
              available anytime.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Rediscover Moments</h3>
            <p className="text-muted-foreground">
              Relive your favorite memories with slideshow widgets and surprise 
              yourself with forgotten moments.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Start Preserving Your Memories Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join families who trust us to keep their precious moments safe and 
              accessible. Free 1GB storage to get started.
            </p>
            <Button size="lg" className="text-base shadow-soft hover:shadow-lg transition-all">
              Create Free Account
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Personal Memories Platform. Built with ❤️ for preserving life's moments.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
