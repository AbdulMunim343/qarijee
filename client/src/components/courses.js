import { Card, Col, Row } from "antd";
import Fade from 'react-reveal/Fade';

export default function Courses(props) {
    return (
        <>
            <h1 style={{textAlign:'center'}}>Courses</h1>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <Fade bottom>
                <Row justify='center'>
                    <Col span={18}>
                        <Card hoverable title="Tafseer">
                            <p>Why Arabic? The Qur’an was revealed in Arabic and as it is the fundamental source of guidance for the Mankind, it is necessary for everyone to be familiar with basic Arabic. How much Arabic should I learn?It is important to</p>
    
                        </Card>
                    </Col>
                </Row>
            </Fade>
            <br/>
            <Fade bottom>
                <Row justify='center'>
                    <Col span={18}>
                        <Card hoverable title="Hadith">
                            <p>The words of PROPHET (P.B.U.H)</p>
    
                        </Card>
                    </Col>
                </Row>
            </Fade>
            <br/>   
            <Fade bottom>
                <Row gutter={{ sm: 12, md: 12, lg: 12 }} justify='center'>
                    <Col span={18}>
                        <Card hoverable title="Hifz Memorizing">
                            <p>“Hafiz” means Guardian or Memorizer. “Hafiza” for female. Memorizing the Holy Qur’an is a spiritual journey for the student. The Qur’an is a miracle from Allah (S.W.T.) and the ability to completely commit it to one’s memory is a great </p>
    
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </>
    )
}