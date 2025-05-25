
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar, Settings, LogOut, Briefcase, Users, TrendingUp, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Utloggad",
      description: "Du har loggats ut från yuapply.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/8cdc42e4-6739-4391-9e66-4775ecafae64.png" 
              alt="yuapply"
              className="h-8"
            />
            <span className="text-xl font-bold text-gray-900">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Godmorgon, Adrian!
          </h1>
          <p className="text-gray-600">
            Här ser du all information gällande ditt jobbsökande, planerade intervjuer samt hur många jobb du har sökt.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-cyan-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-sm">Ansökningar</p>
                  <p className="text-3xl font-bold">32</p>
                </div>
                <Briefcase className="w-8 h-8 text-cyan-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Bokade intervjuer</p>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <Users className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Profil matchning</p>
                  <p className="text-3xl font-bold">85%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Genomsnitt svarstid</p>
                  <p className="text-3xl font-bold">2.3d</p>
                </div>
                <Clock className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Completion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-500" />
              Färdigställ din profil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Progress value={85} className="flex-1" />
              <span className="text-sm font-medium text-gray-600">85%</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Lägg till ditt CV och personliga brev för att öka dina chanser att få jobb.
            </p>
            <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600">
              Slutför profil
            </Button>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-500" />
                Idag
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Intervju med Fitness24Seven</p>
                    <p className="text-xs text-gray-600">08:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-500" />
                Kalender
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">1 november</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Intervju med Nordic Wellness Värndo - 09:00</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Intervju med SATS Värndo</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Visa alla
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
