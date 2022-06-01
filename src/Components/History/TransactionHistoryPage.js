import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import BottomNavbar from "../NavBar/BottomNavbar";
import HistoryCard from "./HistoryCard";

const TransactionHistoryPage = () => {
    return (
        <>
            <Container fluid>

            <Header/>

                <div className="content">
                
                {/* content start here */}

                    <Row className="mt-3">
                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>

                        <HistoryCard/>
                    </Row>
            
                {/* content end here */}

                </div>

            </Container>

            <BottomNavbar/>
            </>
    )
}

export default TransactionHistoryPage;