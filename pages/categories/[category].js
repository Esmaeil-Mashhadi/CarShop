import CategoryPage from "@/components/templates/CategoryPage";
import { useRouter } from "next/router";


const category = () => {

  const router = useRouter();
  const {category} = router.query
  
    return (
       <CategoryPage category = {category}/>
    );
};

export default category;