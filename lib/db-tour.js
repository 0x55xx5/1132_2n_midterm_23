import { supabase } from './supabase';

export const getTours = async function () {
  const { data, error } = await supabase.from('mid_tour_23').select('*');

  if (error) {
    console.error(error);
    throw new Error('Tour could not be loaded');
  }

  return data;
};
