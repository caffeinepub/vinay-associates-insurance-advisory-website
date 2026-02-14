import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { MessageSquare, Video, Trash2, Loader2, Star } from 'lucide-react';
import { useGetAllApprovedTestimonials, useSubmitTestimonial, useDeleteTestimonial, useIsCallerAdmin } from '@/hooks/useQueries';
import { toast } from 'sonner';
import type { Testimonial } from '../backend';

export default function TestimonialsPage() {
  const { data: testimonials = [], isLoading, isFetching } = useGetAllApprovedTestimonials();
  const { data: isAdmin = false } = useIsCallerAdmin();
  const submitTestimonial = useSubmitTestimonial();
  const deleteTestimonial = useDeleteTestimonial();

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    videoUrl: '',
    rating: 5,
  });

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState<bigint | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await submitTestimonial.mutateAsync({
        name: formData.name,
        message: formData.message,
        videoUrl: formData.videoUrl.trim() || null,
        rating: formData.rating,
      });
      toast.success('Thank you for your testimonial! It has been published.');
      setFormData({ name: '', message: '', videoUrl: '', rating: 5 });
    } catch (error) {
      toast.error('Failed to submit testimonial');
      console.error(error);
    }
  };

  const handleDeleteClick = (id: bigint) => {
    setTestimonialToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (testimonialToDelete === null) return;

    try {
      await deleteTestimonial.mutateAsync(testimonialToDelete);
      toast.success('Testimonial deleted successfully');
      setDeleteDialogOpen(false);
      setTestimonialToDelete(null);
    } catch (error) {
      toast.error('Failed to delete testimonial');
      console.error(error);
    }
  };

  const getYouTubeEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
      /youtube\.com\/embed\/([^&\s]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }

    if (url.includes('youtube.com/embed/')) {
      return url;
    }

    return null;
  };

  const formatDate = (timestamp: bigint): string => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-success text-success' : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderInteractiveStars = (currentRating: number, onRatingChange: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 rounded"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className={`h-6 w-6 ${
                star <= currentRating ? 'fill-success text-success' : 'text-muted-foreground/30'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const renderTestimonialCard = (testimonial: Testimonial) => {
    const embedUrl = testimonial.videoUrl ? getYouTubeEmbedUrl(testimonial.videoUrl) : null;
    // Safely convert bigint to number and clamp to 1-5 range
    const rating = Math.max(1, Math.min(5, Number(testimonial.rating)));

    return (
      <Card key={Number(testimonial.id)} className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{testimonial.name}</CardTitle>
              <div className="mb-2">{renderStars(rating)}</div>
              <p className="text-xs text-muted-foreground">
                {formatDate(testimonial.timestamp)}
              </p>
            </div>
            {isAdmin && (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteClick(testimonial.id)}
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  title="Delete testimonial"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "{testimonial.message}"
          </p>

          {embedUrl && (
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                src={embedUrl}
                title={`Testimonial video from ${testimonial.name}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  // Show loading only on initial load, not during background refetch
  const showLoading = isLoading && !isFetching;
  const showEmptyState = !isLoading && !isFetching && testimonials.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-success text-success" />
                ))}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-primary">Customer Testimonials</h1>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied clients about their experience with Vinay Associates
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Submission Form */}
        <Card className="mb-12 border-success/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-success" />
              Share Your Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="rating">Your Rating *</Label>
                <div className="mt-2">
                  {renderInteractiveStars(formData.rating, (rating) => 
                    setFormData({ ...formData, rating })
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Click on the stars to rate your experience
                </p>
              </div>

              <div>
                <Label htmlFor="message">Your Testimonial *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your experience with Vinay Associates..."
                  rows={5}
                  required
                />
              </div>

              <div>
                <Label htmlFor="videoUrl" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Video URL (Optional)
                </Label>
                <Input
                  id="videoUrl"
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  placeholder="YouTube video link (optional)"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Paste a YouTube video link to include a video testimonial
                </p>
              </div>

              <Button
                type="submit"
                disabled={submitTestimonial.isPending}
                className="bg-success hover:bg-success/90"
              >
                {submitTestimonial.isPending && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit Testimonial
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2 text-primary">Customer Testimonials</h2>
            <p className="text-muted-foreground mb-4">
              What our valued clients say about us
            </p>
          </div>

          {showLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : showEmptyState ? (
            <Card className="text-center py-12">
              <CardContent>
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No testimonials yet. Be the first to share your experience!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => renderTestimonialCard(testimonial))}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Testimonial</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this testimonial? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-destructive hover:bg-destructive/90"
            >
              {deleteTestimonial.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
