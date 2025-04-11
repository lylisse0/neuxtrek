
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/project/Header';
import { BarChart, ChevronRight, PlusCircle, Rocket, Users } from 'lucide-react';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neuxtrek-black/90">
      <Header isScrolled={true} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neuxtrek-silver">{t('dashboard.greeting')}</h1>
          <p className="text-neuxtrek-silver/70 mt-2">
            {new Date().toLocaleDateString()} • NeuXTrek AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-black/50 border-neuxtrek-silver/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-neuxtrek-gold text-lg">{t('dashboard.summary')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neuxtrek-silver/70">Active Projects</span>
                  <span className="text-neuxtrek-silver font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neuxtrek-silver/70">AI Models</span>
                  <span className="text-neuxtrek-silver font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neuxtrek-silver/70">Automation Tasks</span>
                  <span className="text-neuxtrek-silver font-medium">12</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full border-neuxtrek-silver/30 text-neuxtrek-silver hover:text-neuxtrek-gold">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/50 border-neuxtrek-silver/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-neuxtrek-gold text-lg">{t('dashboard.stats')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-center justify-center">
                <BarChart className="h-32 w-32 text-neuxtrek-silver/70" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/50 border-neuxtrek-silver/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-neuxtrek-gold text-lg">{t('dashboard.resources')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="ghost" size="sm" className="w-full justify-start text-neuxtrek-silver hover:text-neuxtrek-gold">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Community Forum</span>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-neuxtrek-silver hover:text-neuxtrek-gold">
                  <Rocket className="mr-2 h-4 w-4" />
                  <span>AI Learning Center</span>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-neuxtrek-silver hover:text-neuxtrek-gold">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  <span>API Documentation</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-neuxtrek-silver">{t('dashboard.recent')}</h2>
            <Button variant="ghost" size="sm" className="text-neuxtrek-silver hover:text-neuxtrek-gold">
              {t('dashboard.viewAll')}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-neuxtrek-gold/10 to-black/60 border-neuxtrek-gold/30 hover:border-neuxtrek-gold/50 cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="text-neuxtrek-gold text-lg">Customer Service Automation</CardTitle>
                <CardDescription className="text-neuxtrek-silver/70">Last updated 2 days ago</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-neuxtrek-silver/10 rounded-full overflow-hidden">
                  <div className="h-full bg-neuxtrek-gold w-3/4 rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-neuxtrek-silver/70">75% Complete</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-neuxtrek-silver/10 to-black/60 border-neuxtrek-silver/20 hover:border-neuxtrek-silver/40 cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="text-neuxtrek-silver text-lg">Data Analysis Pipeline</CardTitle>
                <CardDescription className="text-neuxtrek-silver/70">Last updated 5 days ago</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-neuxtrek-silver/10 rounded-full overflow-hidden">
                  <div className="h-full bg-neuxtrek-silver/60 w-2/5 rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-neuxtrek-silver/70">40% Complete</div>
              </CardContent>
            </Card>
            
            <Link to="/new-project">
              <Card className="bg-black/30 border-neuxtrek-silver/10 hover:border-neuxtrek-silver/20 cursor-pointer transition-all h-full flex flex-col items-center justify-center py-8">
                <PlusCircle className="h-12 w-12 text-neuxtrek-silver/40 mb-4" />
                <p className="text-neuxtrek-silver/60 font-medium">{t('dashboard.createProject')}</p>
              </Card>
            </Link>
          </div>
        </div>
        
        {/* Notifications Section */}
        <div>
          <h2 className="text-xl font-semibold text-neuxtrek-silver mb-4">{t('dashboard.notifications')}</h2>
          <Card className="bg-black/50 border-neuxtrek-silver/20">
            <CardContent className="p-4">
              <div className="space-y-4 divide-y divide-neuxtrek-silver/10">
                <div className="pt-4 first:pt-0">
                  <div className="flex justify-between">
                    <p className="text-neuxtrek-silver font-medium">New AI Model Available</p>
                    <span className="text-xs text-neuxtrek-silver/50">2 hours ago</span>
                  </div>
                  <p className="text-sm text-neuxtrek-silver/70 mt-1">
                    A new language processing model has been added to your available tools.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between">
                    <p className="text-neuxtrek-silver font-medium">System Maintenance</p>
                    <span className="text-xs text-neuxtrek-silver/50">1 day ago</span>
                  </div>
                  <p className="text-sm text-neuxtrek-silver/70 mt-1">
                    Scheduled maintenance will occur on Saturday at 2:00 AM UTC.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between">
                    <p className="text-neuxtrek-silver font-medium">Webinar Invitation</p>
                    <span className="text-xs text-neuxtrek-silver/50">3 days ago</span>
                  </div>
                  <p className="text-sm text-neuxtrek-silver/70 mt-1">
                    Join us for a live webinar on "Advanced AI Automation Techniques" next week.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
