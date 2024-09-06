import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import bannar from '../../grocery/assets/image/free.jpg'

export default function Home() {
  // const sliderList = await GlobalApi.getSliders()
  
  return (
    <div className="max-w-[1550px] mx-auto p-5 md:p-10 ">
      <Slider  /> 
      <CategoryList />
      <ProductList /> 
      
      <Image src={bannar} width={2000} height={350} className="w-full object-contain mt-16 h-[510px]" />
    </div>
     );
}
 