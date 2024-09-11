import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import bannar from '../../grocery/assets/image/free.jpg'

export default async function Home() {
   
  const categoryList = await GlobalApi.getCategoryList()
 
   
  return (
    <div className="max-w-[1500px] mx-auto p-5  z-0 md:p-10 ">
      <Slider  /> 
      <CategoryList categoryList={categoryList} />
      <ProductList /> 
      
      <Image src={bannar} width={2000} height={350} className="w-full object-contain mt-16 h-[510px]" />
    </div>
     );
}
 