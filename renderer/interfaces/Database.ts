export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      bom_components: {
        Row: {
          alphabet_reference: string | null;
          bom_id: number;
          component_id: number;
          consumption_marker: number | null;
          consumption_unit: string | null;
          consumption_used: number | null;
          created_at: string;
          deleted_at: string | null;
          id: number;
          location: string | null;
          moq: number | null;
          pdfs: string[];
          price_per_unit: number | null;
          quantity: number | null;
          used_in: Json | null;
        };
        Insert: {
          alphabet_reference?: string | null;
          bom_id: number;
          component_id: number;
          consumption_marker?: number | null;
          consumption_unit?: string | null;
          consumption_used?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          location?: string | null;
          moq?: number | null;
          pdfs: string[];
          price_per_unit?: number | null;
          quantity?: number | null;
          used_in?: Json | null;
        };
        Update: {
          alphabet_reference?: string | null;
          bom_id?: number;
          component_id?: number;
          consumption_marker?: number | null;
          consumption_unit?: string | null;
          consumption_used?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          location?: string | null;
          moq?: number | null;
          pdfs?: string[];
          price_per_unit?: number | null;
          quantity?: number | null;
          used_in?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "bom_components_bom_id_fkey";
            columns: ["bom_id"];
            isOneToOne: false;
            referencedRelation: "boms";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bom_components_component_id_fkey";
            columns: ["component_id"];
            isOneToOne: false;
            referencedRelation: "variants";
            referencedColumns: ["id"];
          }
        ];
      };
      boms: {
        Row: {
          created_at: string;
          id: number;
          internal_note: string | null;
          number: number;
          partner_id: number | null;
          product_id: number;
          reference: string;
          status: string;
          title: string;
          type: string;
          user_id: string | null;
          version: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          internal_note?: string | null;
          number: number;
          partner_id?: number | null;
          product_id: number;
          reference: string;
          status: string;
          title: string;
          type: string;
          user_id?: string | null;
          version: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          internal_note?: string | null;
          number?: number;
          partner_id?: number | null;
          product_id?: number;
          reference?: string;
          status?: string;
          title?: string;
          type?: string;
          user_id?: string | null;
          version?: number;
        };
        Relationships: [
          {
            foreignKeyName: "boms_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "boms_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "boms_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      cartons: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          dimension_unit: string | null;
          gross_weight: number | null;
          height: number | null;
          id: number;
          length: number | null;
          net_weight: number | null;
          number: number;
          packing_list_id: number;
          palette_id: number | null;
          photo_ids: string[] | null;
          serial_number: string;
          variants: Json | null;
          weight_unit: string | null;
          width: number | null;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          dimension_unit?: string | null;
          gross_weight?: number | null;
          height?: number | null;
          id?: number;
          length?: number | null;
          net_weight?: number | null;
          number: number;
          packing_list_id: number;
          palette_id?: number | null;
          photo_ids?: string[] | null;
          serial_number: string;
          variants?: Json | null;
          weight_unit?: string | null;
          width?: number | null;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          dimension_unit?: string | null;
          gross_weight?: number | null;
          height?: number | null;
          id?: number;
          length?: number | null;
          net_weight?: number | null;
          number?: number;
          packing_list_id?: number;
          palette_id?: number | null;
          photo_ids?: string[] | null;
          serial_number?: string;
          variants?: Json | null;
          weight_unit?: string | null;
          width?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "cartoons_packing_list_id_fkey";
            columns: ["packing_list_id"];
            isOneToOne: false;
            referencedRelation: "packing_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "cartoons_pallete_id_fkey";
            columns: ["palette_id"];
            isOneToOne: false;
            referencedRelation: "palettes";
            referencedColumns: ["id"];
          }
        ];
      };
      collections: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          partner_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          partner_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          partner_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "collections_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          }
        ];
      };
      contacts: {
        Row: {
          created_at: string;
          email: string | null;
          id: number;
          name: string | null;
          partner_id: number | null;
          phone: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          partner_id?: number | null;
          phone?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: number;
          name?: string | null;
          partner_id?: number | null;
          phone?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_contact_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          }
        ];
      };
      costs: {
        Row: {
          amount: number | null;
          contact_id: number | null;
          created_at: string;
          currency: string | null;
          fx: number | null;
          id: number;
          partner_id: number | null;
          product_id: number | null;
          user_id: number | null;
          version: string | null;
        };
        Insert: {
          amount?: number | null;
          contact_id?: number | null;
          created_at?: string;
          currency?: string | null;
          fx?: number | null;
          id?: number;
          partner_id?: number | null;
          product_id?: number | null;
          user_id?: number | null;
          version?: string | null;
        };
        Update: {
          amount?: number | null;
          contact_id?: number | null;
          created_at?: string;
          currency?: string | null;
          fx?: number | null;
          id?: number;
          partner_id?: number | null;
          product_id?: number | null;
          user_id?: number | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_cost_contact_id_fkey";
            columns: ["contact_id"];
            isOneToOne: false;
            referencedRelation: "contacts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_cost_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_cost_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      employees: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          department: string | null;
          id: number;
          job_title: string | null;
          name: string;
          phone: string | null;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          department?: string | null;
          id?: number;
          job_title?: string | null;
          name: string;
          phone?: string | null;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          department?: string | null;
          id?: number;
          job_title?: string | null;
          name?: string;
          phone?: string | null;
        };
        Relationships: [];
      };
      local_testing_table: {
        Row: {
          created_at: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      measurements_labels: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          id: number;
          label: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          label: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          label?: string;
        };
        Relationships: [];
      };
      packing_lists: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          description: string | null;
          id: number;
          number: number;
          partner_address_id: number | null;
          partner_id: number;
          photo_ids: string[] | null;
          status: string | null;
          tracking_number: string;
          video_ids: string[] | null;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          number: number;
          partner_address_id?: number | null;
          partner_id: number;
          photo_ids?: string[] | null;
          status?: string | null;
          tracking_number: string;
          video_ids?: string[] | null;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          number?: number;
          partner_address_id?: number | null;
          partner_id?: number;
          photo_ids?: string[] | null;
          status?: string | null;
          tracking_number?: string;
          video_ids?: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "packing_lists_partner_address_id_fkey";
            columns: ["partner_address_id"];
            isOneToOne: false;
            referencedRelation: "partner_addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "packing_lists_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          }
        ];
      };
      palettes: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          id: number;
          number: number;
          photo_ids: string[] | null;
          reference: string;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          number: number;
          photo_ids?: string[] | null;
          reference: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          number?: number;
          photo_ids?: string[] | null;
          reference?: string;
        };
        Relationships: [];
      };
      partner_addresses: {
        Row: {
          address1: string | null;
          address2: string | null;
          city: string | null;
          country_code: string | null;
          created_at: string;
          deleted_at: string | null;
          id: number;
          label: string | null;
          location_link: string | null;
          partner_id: number | null;
          province: string | null;
        };
        Insert: {
          address1?: string | null;
          address2?: string | null;
          city?: string | null;
          country_code?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          label?: string | null;
          location_link?: string | null;
          partner_id?: number | null;
          province?: string | null;
        };
        Update: {
          address1?: string | null;
          address2?: string | null;
          city?: string | null;
          country_code?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          label?: string | null;
          location_link?: string | null;
          partner_id?: number | null;
          province?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "partner_addresses_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          }
        ];
      };
      partners: {
        Row: {
          code: string;
          created_at: string;
          deleted_at: string | null;
          id: number;
          name: string;
          photo_ids: string[];
          type: string;
        };
        Insert: {
          code: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name: string;
          photo_ids: string[];
          type: string;
        };
        Update: {
          code?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name?: string;
          photo_ids?: string[];
          type?: string;
        };
        Relationships: [];
      };
      price_list_components: {
        Row: {
          alphabet_reference: string | null;
          bom_id: number | null;
          created_at: string;
          deleted_at: string | null;
          description: string | null;
          id: number;
          price_list_id: number;
          pricing_list: Json[];
          product_id: number | null;
          product_properties: Json[] | null;
          variant_ids: number[] | null;
        };
        Insert: {
          alphabet_reference?: string | null;
          bom_id?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          price_list_id: number;
          pricing_list: Json[];
          product_id?: number | null;
          product_properties?: Json[] | null;
          variant_ids?: number[] | null;
        };
        Update: {
          alphabet_reference?: string | null;
          bom_id?: number | null;
          created_at?: string;
          deleted_at?: string | null;
          description?: string | null;
          id?: number;
          price_list_id?: number;
          pricing_list?: Json[];
          product_id?: number | null;
          product_properties?: Json[] | null;
          variant_ids?: number[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "price_list_components_bom_id_fkey";
            columns: ["bom_id"];
            isOneToOne: false;
            referencedRelation: "boms";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "price_list_components_price_list_id_fkey";
            columns: ["price_list_id"];
            isOneToOne: false;
            referencedRelation: "price_lists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "price_list_components_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      price_lists: {
        Row: {
          created_at: string;
          currency: string | null;
          deleted_at: string | null;
          external_reference: string | null;
          id: number;
          partner_id: number;
          reference: string | null;
          status: string | null;
          thresholds: string[] | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          currency?: string | null;
          deleted_at?: string | null;
          external_reference?: string | null;
          id?: number;
          partner_id: number;
          reference?: string | null;
          status?: string | null;
          thresholds?: string[] | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          currency?: string | null;
          deleted_at?: string | null;
          external_reference?: string | null;
          id?: number;
          partner_id?: number;
          reference?: string | null;
          status?: string | null;
          thresholds?: string[] | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "price_lists_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "price_lists_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      price_rules: {
        Row: {
          created_at: string;
          currency: string;
          deciding_property: string;
          id: number;
          operator: string;
          price: number;
          product_id: number;
        };
        Insert: {
          created_at?: string;
          currency: string;
          deciding_property: string;
          id?: number;
          operator: string;
          price: number;
          product_id: number;
        };
        Update: {
          created_at?: string;
          currency?: string;
          deciding_property?: string;
          id?: number;
          operator?: string;
          price?: number;
          product_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "price_rule_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      product_samples: {
        Row: {
          created_at: string;
          id: number;
          product_id: number;
          sample_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          product_id: number;
          sample_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          product_id?: number;
          sample_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "product_sample_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "product_sample_sample_id_fkey";
            columns: ["sample_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      production_lines: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          id: number;
          name: string | null;
          target_qty: number | null;
        };
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name?: string | null;
          target_qty?: number | null;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          name?: string | null;
          target_qty?: number | null;
        };
        Relationships: [];
      };
      production_lines_reports: {
        Row: {
          comment: string | null;
          created_at: string;
          date: string | null;
          deleted_at: string | null;
          id: number;
          n_packing: number | null;
          n_productions: number | null;
          n_quality: number | null;
          n_repairs: number | null;
          n_trimming: number | null;
          overtime: boolean | null;
          production_line_id: number | null;
          report: Json | null;
          user_id: string | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string;
          date?: string | null;
          deleted_at?: string | null;
          id?: number;
          n_packing?: number | null;
          n_productions?: number | null;
          n_quality?: number | null;
          n_repairs?: number | null;
          n_trimming?: number | null;
          overtime?: boolean | null;
          production_line_id?: number | null;
          report?: Json | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string;
          date?: string | null;
          deleted_at?: string | null;
          id?: number;
          n_packing?: number | null;
          n_productions?: number | null;
          n_quality?: number | null;
          n_repairs?: number | null;
          n_trimming?: number | null;
          overtime?: boolean | null;
          production_line_id?: number | null;
          report?: Json | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "production_lines_reports_production_line_id_fkey";
            columns: ["production_line_id"];
            isOneToOne: false;
            referencedRelation: "production_lines";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "production_lines_reports_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      production_sheet_variants: {
        Row: {
          bom_id: number;
          created_at: string;
          cut: number;
          deleted_at: string | null;
          id: number;
          packed: number;
          production_sheet_id: number;
          quantity: number;
          variant_id: number;
        };
        Insert: {
          bom_id: number;
          created_at?: string;
          cut: number;
          deleted_at?: string | null;
          id?: number;
          packed: number;
          production_sheet_id: number;
          quantity: number;
          variant_id: number;
        };
        Update: {
          bom_id?: number;
          created_at?: string;
          cut?: number;
          deleted_at?: string | null;
          id?: number;
          packed?: number;
          production_sheet_id?: number;
          quantity?: number;
          variant_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "production_sheet_variants_bom_id_fkey";
            columns: ["bom_id"];
            isOneToOne: false;
            referencedRelation: "boms";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "production_sheet_variants_production_sheet_id_fkey";
            columns: ["production_sheet_id"];
            isOneToOne: false;
            referencedRelation: "production_sheets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "production_sheet_variants_variant_id_fkey";
            columns: ["variant_id"];
            isOneToOne: false;
            referencedRelation: "variants";
            referencedColumns: ["id"];
          }
        ];
      };
      production_sheets: {
        Row: {
          created_at: string;
          id: number;
          partner_id: number | null;
          reference: string;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          partner_id?: number | null;
          reference: string;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          partner_id?: number | null;
          reference?: string;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "production_sheets_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          }
        ];
      };
      products: {
        Row: {
          artwork_ids: string[];
          category: string;
          certificate_requirements: string[] | null;
          collection_id: number | null;
          color: string | null;
          color_code: string | null;
          composition: string | null;
          construction: string | null;
          created_at: string;
          depth: number | null;
          depth_unit: string | null;
          description: string | null;
          diameter: number | null;
          diameter_unit: string | null;
          external_reference: string | null;
          finishing: string | null;
          folding_type: string | null;
          height: number | null;
          height_unit: string | null;
          id: number;
          is_sample: boolean | null;
          is_sample_sent: boolean | null;
          merchandiser_id: number | null;
          name: string;
          number: number;
          options: Json | null;
          origin: string | null;
          partner_id: number | null;
          photo_ids: string[];
          production_date: string | null;
          quality_control_id: number | null;
          roll_type: string | null;
          roll_width: number | null;
          roll_width_unit: string | null;
          sample_code: string | null;
          sample_direction: string | null;
          sample_type: string | null;
          sewer_id: number | null;
          size_chart_id: number | null;
          style: string | null;
          technician_id: number | null;
          thickness: number | null;
          thickness_unit: string | null;
          video_ids: string[] | null;
          weight: number | null;
          weight_unit: string | null;
          width: number | null;
          width_unit: string | null;
          yarn_count: string | null;
        };
        Insert: {
          artwork_ids: string[];
          category: string;
          certificate_requirements?: string[] | null;
          collection_id?: number | null;
          color?: string | null;
          color_code?: string | null;
          composition?: string | null;
          construction?: string | null;
          created_at?: string;
          depth?: number | null;
          depth_unit?: string | null;
          description?: string | null;
          diameter?: number | null;
          diameter_unit?: string | null;
          external_reference?: string | null;
          finishing?: string | null;
          folding_type?: string | null;
          height?: number | null;
          height_unit?: string | null;
          id?: number;
          is_sample?: boolean | null;
          is_sample_sent?: boolean | null;
          merchandiser_id?: number | null;
          name: string;
          number: number;
          options?: Json | null;
          origin?: string | null;
          partner_id?: number | null;
          photo_ids: string[];
          production_date?: string | null;
          quality_control_id?: number | null;
          roll_type?: string | null;
          roll_width?: number | null;
          roll_width_unit?: string | null;
          sample_code?: string | null;
          sample_direction?: string | null;
          sample_type?: string | null;
          sewer_id?: number | null;
          size_chart_id?: number | null;
          style?: string | null;
          technician_id?: number | null;
          thickness?: number | null;
          thickness_unit?: string | null;
          video_ids?: string[] | null;
          weight?: number | null;
          weight_unit?: string | null;
          width?: number | null;
          width_unit?: string | null;
          yarn_count?: string | null;
        };
        Update: {
          artwork_ids?: string[];
          category?: string;
          certificate_requirements?: string[] | null;
          collection_id?: number | null;
          color?: string | null;
          color_code?: string | null;
          composition?: string | null;
          construction?: string | null;
          created_at?: string;
          depth?: number | null;
          depth_unit?: string | null;
          description?: string | null;
          diameter?: number | null;
          diameter_unit?: string | null;
          external_reference?: string | null;
          finishing?: string | null;
          folding_type?: string | null;
          height?: number | null;
          height_unit?: string | null;
          id?: number;
          is_sample?: boolean | null;
          is_sample_sent?: boolean | null;
          merchandiser_id?: number | null;
          name?: string;
          number?: number;
          options?: Json | null;
          origin?: string | null;
          partner_id?: number | null;
          photo_ids?: string[];
          production_date?: string | null;
          quality_control_id?: number | null;
          roll_type?: string | null;
          roll_width?: number | null;
          roll_width_unit?: string | null;
          sample_code?: string | null;
          sample_direction?: string | null;
          sample_type?: string | null;
          sewer_id?: number | null;
          size_chart_id?: number | null;
          style?: string | null;
          technician_id?: number | null;
          thickness?: number | null;
          thickness_unit?: string | null;
          video_ids?: string[] | null;
          weight?: number | null;
          weight_unit?: string | null;
          width?: number | null;
          width_unit?: string | null;
          yarn_count?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_collection_id_fkey";
            columns: ["collection_id"];
            isOneToOne: false;
            referencedRelation: "collections";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_merchandiser_id_fkey";
            columns: ["merchandiser_id"];
            isOneToOne: false;
            referencedRelation: "employees";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_quality_control_id_fkey";
            columns: ["quality_control_id"];
            isOneToOne: false;
            referencedRelation: "employees";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_sewer_id_fkey";
            columns: ["sewer_id"];
            isOneToOne: false;
            referencedRelation: "employees";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_size_chart_id_fkey";
            columns: ["size_chart_id"];
            isOneToOne: false;
            referencedRelation: "size_charts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_technician_id_fkey";
            columns: ["technician_id"];
            isOneToOne: false;
            referencedRelation: "employees";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          first_name: string | null;
          id: string;
          last_name: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      remote_media: {
        Row: {
          created_at: string;
          id: number;
          media_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          media_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          media_id?: string;
        };
        Relationships: [];
      };
      size_charts: {
        Row: {
          comment: string | null;
          created_at: string;
          deleted_at: string | null;
          id: number;
          measurement_unit: string;
          measurements: Json[] | null;
          origin: string | null;
          photo_ids: string[];
          reference: string;
          shrinkage_used: string | null;
          sizes: string[] | null;
          status: string;
          style_reference: string;
          type: string;
          user_id: string | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          measurement_unit: string;
          measurements?: Json[] | null;
          origin?: string | null;
          photo_ids: string[];
          reference: string;
          shrinkage_used?: string | null;
          sizes?: string[] | null;
          status: string;
          style_reference: string;
          type: string;
          user_id?: string | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          id?: number;
          measurement_unit?: string;
          measurements?: Json[] | null;
          origin?: string | null;
          photo_ids?: string[];
          reference?: string;
          shrinkage_used?: string | null;
          sizes?: string[] | null;
          status?: string;
          style_reference?: string;
          type?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "size_charts_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      test: {
        Row: {
          created_at: string;
          id: number;
          parent_test: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          parent_test?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          parent_test?: number | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string;
          id: string;
          role: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          role?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          role?: string | null;
        };
        Relationships: [];
      };
      variants: {
        Row: {
          artwork_ids: string[];
          barcode: string | null;
          category: string;
          certificate_requirements: string[] | null;
          color: string | null;
          color_code: string | null;
          composition: string | null;
          construction: string | null;
          created_at: string;
          deleted_at: string | null;
          depth: number | null;
          depth_unit: string | null;
          diameter: number | null;
          diameter_unit: string | null;
          external_reference: string | null;
          finishing: string | null;
          folding_type: string | null;
          height: number | null;
          height_unit: string | null;
          hs_code: string | null;
          id: number;
          name: string;
          origin: string | null;
          partner_id: number | null;
          photo_ids: string[];
          product_id: number;
          roll_type: string | null;
          roll_width: number | null;
          roll_width_unit: string | null;
          selected_options: Json | null;
          sku: string | null;
          thickness: number | null;
          thickness_unit: string | null;
          video_ids: string[] | null;
          weight: number | null;
          weight_unit: string | null;
          width: number | null;
          width_unit: string | null;
          yarn_count: string | null;
        };
        Insert: {
          artwork_ids: string[];
          barcode?: string | null;
          category: string;
          certificate_requirements?: string[] | null;
          color?: string | null;
          color_code?: string | null;
          composition?: string | null;
          construction?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          depth?: number | null;
          depth_unit?: string | null;
          diameter?: number | null;
          diameter_unit?: string | null;
          external_reference?: string | null;
          finishing?: string | null;
          folding_type?: string | null;
          height?: number | null;
          height_unit?: string | null;
          hs_code?: string | null;
          id?: number;
          name: string;
          origin?: string | null;
          partner_id?: number | null;
          photo_ids: string[];
          product_id: number;
          roll_type?: string | null;
          roll_width?: number | null;
          roll_width_unit?: string | null;
          selected_options?: Json | null;
          sku?: string | null;
          thickness?: number | null;
          thickness_unit?: string | null;
          video_ids?: string[] | null;
          weight?: number | null;
          weight_unit?: string | null;
          width?: number | null;
          width_unit?: string | null;
          yarn_count?: string | null;
        };
        Update: {
          artwork_ids?: string[];
          barcode?: string | null;
          category?: string;
          certificate_requirements?: string[] | null;
          color?: string | null;
          color_code?: string | null;
          composition?: string | null;
          construction?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          depth?: number | null;
          depth_unit?: string | null;
          diameter?: number | null;
          diameter_unit?: string | null;
          external_reference?: string | null;
          finishing?: string | null;
          folding_type?: string | null;
          height?: number | null;
          height_unit?: string | null;
          hs_code?: string | null;
          id?: number;
          name?: string;
          origin?: string | null;
          partner_id?: number | null;
          photo_ids?: string[];
          product_id?: number;
          roll_type?: string | null;
          roll_width?: number | null;
          roll_width_unit?: string | null;
          selected_options?: Json | null;
          sku?: string | null;
          thickness?: number | null;
          thickness_unit?: string | null;
          video_ids?: string[] | null;
          weight?: number | null;
          weight_unit?: string | null;
          width?: number | null;
          width_unit?: string | null;
          yarn_count?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "variants_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referencedRelation: "partners";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variants_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
