export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      equipment: {
        Row: {
          id: string
          category_id: string
          name: string
          description: string | null
          daily_rate: number
          weekly_rate: number
          monthly_rate: number
          total_quantity: number
          available_quantity: number
          specifications: Json | null
          images: string[] | null
          status: 'active' | 'inactive' | 'maintenance'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category_id: string
          name: string
          description?: string | null
          daily_rate: number
          weekly_rate: number
          monthly_rate: number
          total_quantity: number
          available_quantity: number
          specifications?: Json | null
          images?: string[] | null
          status?: 'active' | 'inactive' | 'maintenance'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category_id?: string
          name?: string
          description?: string | null
          daily_rate?: number
          weekly_rate?: number
          monthly_rate?: number
          total_quantity?: number
          available_quantity?: number
          specifications?: Json | null
          images?: string[] | null
          status?: 'active' | 'inactive' | 'maintenance'
          created_at?: string
          updated_at?: string
        }
      }
      inventory_transactions: {
        Row: {
          id: string
          equipment_id: string
          user_id: string
          type: 'in' | 'out'
          quantity: number
          date: string
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          equipment_id: string
          user_id: string
          type: 'in' | 'out'
          quantity: number
          date?: string
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          equipment_id?: string
          user_id?: string
          type?: 'in' | 'out'
          quantity?: number
          date?: string
          notes?: string | null
          created_at?: string
        }
      }
      rentals: {
        Row: {
          id: string
          user_id: string
          equipment_id: string
          quantity: number
          start_date: string
          end_date: string
          total_cost: number
          status: 'pending' | 'active' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          equipment_id: string
          quantity: number
          start_date: string
          end_date: string
          total_cost: number
          status?: 'pending' | 'active' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          equipment_id?: string
          quantity?: number
          start_date?: string
          end_date?: string
          total_cost?: number
          status?: 'pending' | 'active' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}