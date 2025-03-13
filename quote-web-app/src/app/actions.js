"use server";
export const estimatePrice =  async (formData) => {
  const { app_type, page_num, features_required, design_complexities } = formData;
  console.log(formData)
  let price = 0;
  if (app_type === "website") {
    price += 1000;
  } else {
    price += 2000;
  }
  price += page_num * 100;
  price += features_required.length * 100;
  if (design_complexities === "basic") {
    price += 500;
  } else if (design_complexities === "standard") {
    price += 1000;
  } else {
    price += 2000;
  }
  return price;
}; 