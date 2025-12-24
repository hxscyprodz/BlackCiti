import ServicesLayout from '../libs/ServicesLayout'
import Services from "../components/Services";
import FAQs from '../components/FAQs';
import Footer from '../libs/footer';

export default function ServicesPage(){
    return(
        <div>
            <Services/>
            <FAQs />
            <Footer />
        </div>
    )
}