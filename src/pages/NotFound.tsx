import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Calculator, BookOpen, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestions = [
    { icon: Home, label: "Home", path: "/", description: "Return to the main page" },
    { icon: Calculator, label: "HDI Calculator", path: "/hdi-calculator", description: "Assess your HDI 2.0" },
    { icon: BookOpen, label: "Methodology", path: "/methodology", description: "Learn about HDI 2.0" },
    { icon: Users, label: "Join Movement", path: "/join-movement", description: "Get involved" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-8xl font-bold text-hdi-blue mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8 text-sm text-muted-foreground">
            <strong>Requested URL:</strong> {location.pathname}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {suggestions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.path} 
                className="cursor-pointer hover:shadow-medium transition-shadow"
                onClick={() => navigate(item.path)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-hdi-blue/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-hdi-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="bg-hdi-blue hover:bg-hdi-blue/90"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
