-- Create contacts table for form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'contact-page',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can submit contact forms"
ON public.contacts
FOR INSERT
WITH CHECK (true);

-- Create policy to prevent public reads (admin only in future)
CREATE POLICY "Only admins can view contacts"
ON public.contacts
FOR SELECT
USING (false);

-- Create index for faster queries on created_at
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);