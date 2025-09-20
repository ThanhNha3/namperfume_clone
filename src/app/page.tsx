import PromoSlider from "@/components/home/PromoSlider";
import { SectionList } from "@/components/home/SectionList";

const brands = [
  { id: 1, name: "Dior", logo: "/brands/logo-brand-dior.png" },
  { id: 2, name: "Chanel", logo: "/brands/logo-brand-chanel.png" },
  { id: 3, name: "Jo Malone", logo: "/brands/logo-brand-jo-malone.png" },
  { id: 4, name: "Gucci", logo: "/brands/logo-brand-gucci.png" },
  { id: 5, name: "Versace", logo: "/brands/logo-brand-versace.png" },
];

export default function Home() {
  return (
    <div>
      <PromoSlider />
    </div>
  );
}
