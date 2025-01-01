import supabase from '../supabaseClient'
import { Store } from '../types'

// Create a new store
export const createStore = async (store: Omit<Store, 'id'>) => {
  const { data, error } = await supabase
    .from('stores')
    .insert([store])

  if (error) throw error
  return data
}

// Get all stores
export const getStores = async () => {
  const { data, error } = await supabase
    .from('stores')
    .select('*')

  if (error) throw error
  return data
}

// Update a store
export const updateStore = async (id: number, store: Partial<Store>) => {
  const { data, error } = await supabase
    .from('stores')
    .update(store)
    .eq('id', id)

  if (error) throw error
  return data
}

// Delete a store
export const deleteStore = async (id: number) => {
  const { data, error } = await supabase
    .from('stores')
    .delete()
    .eq('id', id)

  if (error) throw error
  return data
}
