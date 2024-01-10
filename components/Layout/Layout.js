import styles from './Layout.module.css'
import Link from 'next/link';


import {AiTwotoneHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdContactPhone} from 'react-icons/md'
import {FaCarSide} from 'react-icons/fa'
import Search from '../modules/Search';
import MobileNave from '../modules/MobileNave';




const Layout = ({children}) => {

    return (
      
        <div className={styles.container}>
        <header className={styles.header}> 

        <div className={styles.linkcontainer}> 

        <Link  href="/"><AiTwotoneHome/>Home</Link>
        <Link href="/demo"> <FcAbout/> About us </Link>
        <Link href="/demo"> <MdContactPhone/> Contact us</Link>
        <Link href="/AllCars"> <FaCarSide/>See all Cars</Link>
        </div>

   


        <div className={styles.mobileHam}>
          <MobileNave />
        </div>
        
         <Search />
        </header>
      
          {children}  
   
    
        <footer className={styles.footer}>Esmaeil Mashhadi Project | &copy;</footer>
        
        </div>
    );
};

export default Layout;