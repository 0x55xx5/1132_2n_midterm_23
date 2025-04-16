import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://bglyjzwsezkgzpgvtdtx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnbHlqendzZXprZ3pwZ3Z0ZHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NzcwNzksImV4cCI6MjA1NzM1MzA3OX0.x1i1m-9Y7VNnkeH9aEoWZxhp8mfHvvrpJ6BUyvPtt_0'
);
