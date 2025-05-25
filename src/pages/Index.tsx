
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Smartphone, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-cyan-600">yuapply</div>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <a href="mailto:info@yuapply.se">
              <Mail className="w-4 h-4 mr-2" />
              Kontakt
            </a>
          </Button>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
            <Link to="/login">
              Logga in
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Modernisera din <span className="text-cyan-500">jobbsökning</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          yuapply revolutionerar rekryteringsprocessen med en intuitiv swipe-funktion. 
          Enkelt, snabbt och effektivt - för både arbetssökande och arbetsgivare.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8">
            Kom igång
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Läs mer
          </Button>
        </div>

        {/* Mobile App Mockup */}
        <div className="relative max-w-md mx-auto">
          <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] relative">
              <img 
                src="/lovable-uploads/d9d8f1db-e6f7-48ca-9787-e393b981d145.png" 
                alt="yuapply app hem-skärm"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Så fungerar yuapply
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Swipa genom jobb</h3>
            <p className="text-gray-600">
              Bläddra enkelt genom relevanta jobbmöjligheter med intuitiva swipe-gester. 
              Höger för intresse, vänster för att hoppa över.
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Snabb matchning</h3>
            <p className="text-gray-600">
              Vår algoritm matchar dig med relevanta positioner baserat på din profil, 
              erfarenhet och preferenser.
            </p>
          </Card>

          <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Direkt kontakt</h3>
            <p className="text-gray-600">
              När det blir en match kan både arbetssökande och arbetsgivare 
              kommunicera direkt via plattformen.
            </p>
          </Card>
        </div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              För jobbsökande
            </h3>
            <p className="text-gray-600 mb-6">
              Skapa din profil, ställ in dina preferenser och börja swipa genom 
              intressanta jobbmöjligheter. Få notifikationer när arbetsgivare 
              visar intresse för din profil.
            </p>
            <div className="flex gap-4">
              <div className="w-48 h-96 bg-black rounded-[1.5rem] p-1 shadow-lg">
                <div className="bg-white rounded-[1.2rem] overflow-hidden h-full">
                  <img 
                    src="/lovable-uploads/4805027d-dd0e-4bff-8105-e35a3666bc9a.png" 
                    alt="yuapply swipe-funktion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hantera din profil
            </h3>
            <p className="text-gray-600 mb-6">
              Håll din profil uppdaterad med CV, personligt brev och referenser. 
              Se statistik över dina ansökningar och matchningar.
            </p>
            <div className="flex gap-4">
              <div className="w-48 h-96 bg-black rounded-[1.5rem] p-1 shadow-lg">
                <div className="bg-white rounded-[1.2rem] overflow-hidden h-full">
                  <img 
                    src="/lovable-uploads/82d82aa4-2de2-44db-9d8c-9da73a782f10.png" 
                    alt="yuapply profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Redo att revolutionera din jobbsökning?
          </h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Gå med i tusentals användare som redan upptäckt framtiden för rekrytering.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Ladda ner appen
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-cyan-500">
              <a href="mailto:info@yuapply.se">Kontakta oss</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-4">yuapply</div>
          <p className="text-gray-400 mb-4">
            Moderniserar rekryteringsprocessen en swipe i taget
          </p>
          <Button variant="ghost" asChild>
            <a href="mailto:info@yuapply.se" className="text-cyan-400 hover:text-cyan-300">
              info@yuapply.se
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
