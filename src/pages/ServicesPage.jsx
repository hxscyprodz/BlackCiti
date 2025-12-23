import ServicesLayout from '../libs/ServicesLayout'
import Services from "../components/Services";
import FAQs from '../components/FAQs';

export default function ServicesPage(){
    return(
        <ServicesLayout>
            <Services/>
            <FAQs />
        </ServicesLayout>
    )
}