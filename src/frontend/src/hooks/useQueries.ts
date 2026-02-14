import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Testimonial } from '../backend';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { fullName: string; phone: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitContactForm(data.fullName, data.phone, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    },
  });
}

export function useRequestCallback() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { fullName: string; phone: string; preferredTime: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.requestCallback(data.fullName, data.phone, data.preferredTime, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['callbackRequests'] });
    },
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { fullName: string; contactMethod: string; insuranceType: string; additionalInfo: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitEnquiry(data.fullName, data.contactMethod, data.insuranceType, data.additionalInfo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}

export function useGetAllApprovedTestimonials() {
  const { actor } = useActor();

  return useQuery<Testimonial[]>({
    queryKey: ['approvedTestimonials'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      const testimonials = await actor.getApprovedTestimonials();
      return testimonials.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
    },
    enabled: !!actor,
    staleTime: 0,
    refetchOnMount: true,
  });
}

export function useSubmitTestimonial() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; message: string; videoUrl: string | null; rating: number }): Promise<Testimonial> => {
      if (!actor) throw new Error('Actor not initialized');
      // Convert rating to bigint for backend
      return await actor.submitTestimonial(data.name, data.message, data.videoUrl, BigInt(data.rating));
    },
    onSuccess: async (newTestimonial) => {
      // Immediately update the cache with the new testimonial
      queryClient.setQueryData<Testimonial[]>(['approvedTestimonials'], (oldData) => {
        const currentData = oldData || [];
        
        // Check if testimonial already exists (by id) and replace it, otherwise add it
        const existingIndex = currentData.findIndex(t => t.id === newTestimonial.id);
        let updatedData: Testimonial[];
        
        if (existingIndex >= 0) {
          // Replace existing testimonial
          updatedData = [...currentData];
          updatedData[existingIndex] = newTestimonial;
        } else {
          // Add new testimonial
          updatedData = [newTestimonial, ...currentData];
        }
        
        // Sort by timestamp (newest first)
        return updatedData.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      });
      
      // Trigger a background refetch to ensure consistency with backend
      await queryClient.refetchQueries({ queryKey: ['approvedTestimonials'] });
    },
  });
}

export function useDeleteTestimonial() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.deleteTestimonial(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['approvedTestimonials'] });
      await queryClient.refetchQueries({ queryKey: ['approvedTestimonials'] });
    },
  });
}

export function useIsCallerAdmin() {
  const { actor } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor,
  });
}
