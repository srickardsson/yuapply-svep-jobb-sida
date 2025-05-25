
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login process - replace with actual Supabase auth
    try {
      // This is where you'd integrate with your existing Supabase instance
      // For demo purposes, we'll simulate a successful login
      console.log("Attempting login with:", email);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, accept any email/password combination
      if (email && password) {
        toast({
          title: "Inloggning lyckades!",
          description: "Välkommen till yuapply dashboard.",
        });
        navigate("/dashboard");
      } else {
        throw new Error("Vänligen fyll i alla fält");
      }
    } catch (error) {
      toast({
        title: "Inloggning misslyckades",
        description: "Kontrollera dina uppgifter och försök igen.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="absolute left-4 top-8">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka
            </Button>
          </Link>
          <img 
            src="/lovable-uploads/8cdc42e4-6739-4391-9e66-4775ecafae64.png" 
            alt="yuapply logotyp"
            className="h-16 mb-4"
          />
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Välkommen tillbaka
            </CardTitle>
            <CardDescription className="text-gray-600">
              Logga in på ditt yuapply-konto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-postadress</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="din@email.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Lösenord</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ditt lösenord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-600" 
                disabled={loading}
              >
                {loading ? "Loggar in..." : "Logga in"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-cyan-600 hover:text-cyan-700">
                Glömt lösenord?
              </Button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              Har du inget konto?{" "}
              <Button variant="link" className="text-cyan-600 hover:text-cyan-700 p-0">
                Registrera dig här
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
