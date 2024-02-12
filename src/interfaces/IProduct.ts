export interface Product {
  image: string;
  id: string;
  title: string;
  accordions: Array<Accordion>;
}

export interface Accordion {
  title: string;
  subtitle?: string;
  text: string;
}