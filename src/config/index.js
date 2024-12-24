export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "mug", label: "mug" },
      { id: "teacup", label: "teacup" },
      { id: "keychains", label: "keychains" },
      { id: "accessories", label: "accessories" },
      { id: "wallposters", label: "wallposters" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "animeandmanga", label: "anime and manga" },
      { id: "vintage", label: "vintage" },
      { id: "abstruct", label: "abstruct" },
      { id: "cartoon", label: "cartoon" },
      { id: "merch", label: "merch" },
      { id: "other", label: "other" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "products",
    path: "/shop/listing",
  },
  {
    id: "mug",
    label: "mug",
    path: "/shop/listing",
  },
  {
    id: "teacup",
    label: "teacup",
    path: "/shop/listing",
  },
  {
    id: "keychains",
    label: "keychains",
    path: "/shop/listing",
  },
  {
    id: "wallposters",
    label: "wallposters",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  mug: "mug",
  teacup: "teacup",
  keychains: "keychains",
  accessories: "accessories",
  wallposters: "wallposters",
};

export const brandOptionsMap = {
  animeandmanga: "anime and manga",
  vintage: "vintage",
  abstruct: "abstruct",
  cartoon: "cartoon",
  merch: "merch",
  other: "other",
};

export const filterOptions = {
  category: [
    { id: "mug", label: "mug" },
    { id: "teacup", label: "teacup" },
    { id: "keychains", label: "keychains" },
    { id: "accessories", label: "accessories" },
    { id: "wallposters", label: "wallposters" },
  ],
  brand: [
    { id: "animeandmanga", label: "anime and manga" },
    { id: "vintage", label: "vintage" },
    { id: "abstruct", label: "abstruct" },
    { id: "cartoon", label: "cartoon" },
    { id: "merch", label: "merch" },
    { id: "other", label: "other" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
