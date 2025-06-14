import { supabase } from './supabaseClient';

export const createListing = async ({
  user_id,
  card_id,
  card_name,
  image_url,
  price,
}: {
  user_id: string;
  card_id: string;
  card_name: string;
  image_url: string;
  price: number;
}) => {
  return await supabase.from('listings').insert([
    {
      user_id,
      card_id,
      card_name,
      image_url,
      price,
    },
  ]);
};
