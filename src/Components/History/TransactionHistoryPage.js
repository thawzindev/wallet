import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import BottomNavbar from "../NavBar/BottomNavbar";
import HistoryCard from "./HistoryCard";

const TransactionHistoryPage = () => {
    return (
        <>
            <Container fluid>
                
                <Header/>
                
                {/* content start here */}

                    <Row className="mt-3">
                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>
                    </Row>
            
                {/* content end here */}


                <BottomNavbar/>

            </Container>
        </>
    )
}

export default TransactionHistoryPage;