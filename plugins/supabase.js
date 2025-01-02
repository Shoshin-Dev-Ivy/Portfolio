import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mrsxxcqmciurcqwnnzjh.supabase.co';  // Remplacez par votre URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yc3h4Y3FtY2l1cmNxd25uempoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3OTA5NTgsImV4cCI6MjA0ODM2Njk1OH0.aqa835L4o8DtneTeKqlNtRePAGE6tQEiO_cD3CqteDg';  // Remplacez par votre clé publique

export default defineNuxtPlugin(nuxtApp => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  nuxtApp.provide('supabase', supabase);
});
