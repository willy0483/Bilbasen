import { supabase } from "../supabase/supabase.js";

export class carModel {
  async list() {
    try {
      const { data, error } = await supabase
        .from("cars")
        .select("brands(brand)");
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.log("Erorr fetching cars: ", error);
    }
  }
}
