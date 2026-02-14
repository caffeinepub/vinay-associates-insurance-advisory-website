import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRequestCallback } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface CallbackDialogProps {
  trigger?: React.ReactNode;
}

export default function CallbackDialog({ trigger }: CallbackDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredTime: '',
    message: '',
  });

  const requestCallbackMutation = useRequestCallback();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.preferredTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await requestCallbackMutation.mutateAsync(formData);
      toast.success('Callback request submitted successfully! We will contact you soon.');
      setFormData({ fullName: '', phone: '', preferredTime: '', message: '' });
      setOpen(false);
    } catch (error) {
      toast.error('Failed to submit callback request. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Request a Callback</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Callback</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll call you back at your preferred time.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="callback-name">Full Name *</Label>
            <Input
              id="callback-name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback-phone">Phone Number *</Label>
            <Input
              id="callback-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback-time">Preferred Time *</Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
            >
              <SelectTrigger id="callback-time">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback-message">Message (Optional)</Label>
            <Textarea
              id="callback-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific requirements or questions?"
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full" disabled={requestCallbackMutation.isPending}>
            {requestCallbackMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
