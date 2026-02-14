import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MessageCircle } from 'lucide-react';

interface GetQuoteDialogProps {
  trigger: React.ReactNode;
  onClose?: () => void;
}

export default function GetQuoteDialog({ trigger, onClose }: GetQuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('term');

  const insuranceTypes = [
    { value: 'term', label: 'Term Insurance' },
    { value: 'health', label: 'Health Insurance' },
    { value: 'motor', label: 'Motor Insurance' },
    { value: 'other', label: 'Other Insurance' },
  ];

  const handleGetQuote = () => {
    const typeLabel = insuranceTypes.find(t => t.value === selectedType)?.label || 'Insurance';
    const message = encodeURIComponent(`Hi, I would like to get a quote for ${typeLabel}. Please provide me with more details.`);
    const whatsappUrl = `https://wa.me/918341924348?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Insurance Quote</DialogTitle>
          <DialogDescription>
            Select the type of insurance you're interested in, and we'll connect you via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label>Select Insurance Type</Label>
            <RadioGroup value={selectedType} onValueChange={setSelectedType}>
              {insuranceTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <Label htmlFor={type.value} className="font-normal cursor-pointer">
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <Button onClick={handleGetQuote} className="w-full" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Continue to WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
