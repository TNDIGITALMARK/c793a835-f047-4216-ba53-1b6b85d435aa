'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(905) 226-9121"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleChange('projectType', value)}
                required
              >
                <SelectTrigger id="projectType">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                  <SelectItem value="living-room">Living Room Wall Unit</SelectItem>
                  <SelectItem value="storage">Custom Storage Solutions</SelectItem>
                  <SelectItem value="bathroom">Bathroom Cabinetry</SelectItem>
                  <SelectItem value="other">Other Custom Work</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleChange('timeline', value)}
              >
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1-3">1-3 months</SelectItem>
                  <SelectItem value="3-6">3-6 months</SelectItem>
                  <SelectItem value="6+">6+ months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleChange('budget', value)}
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k+">$100,000+</SelectItem>
                  <SelectItem value="unsure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell Us About Your Project</Label>
            <Textarea
              id="message"
              placeholder="Describe your vision, space dimensions, style preferences, and any specific requirements..."
              rows={6}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </div>

          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              <strong>Thank you!</strong> We've received your consultation request and will contact you within 24 hours.
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <strong>Error:</strong> There was a problem submitting your request. Please try again or call us directly.
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              'Submitting...'
            ) : (
              <>
                Submit Consultation Request
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by Purebrook Kitchens regarding your project.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
