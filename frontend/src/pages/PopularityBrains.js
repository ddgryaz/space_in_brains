import React, {useEffect, useState} from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';
import {observer} from "mobx-react-lite";
import {mostPopularBrains} from "../http/mostPopularAPI";
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import BrainsList from "../components/BrainsList";
import Pages from "../components/Pages";

const PopularityBrains = observer(() => {
    // const items = [
    //     {name: 'JavaScript', popularity: "1"},
    //     {name: 'Freelance', popularity: "2"},
    //     {name: 'Docker', popularity: "2"},
    //     {name: 'Docke3r', popularity: "2"},
    //     {name: 'Docke2r', popularity: "4"},
    // ];
    const [brains, setBrains] = useState([])

    useEffect(() => {
        mostPopularBrains().then(data => setBrains(data))
    }, [])
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation/>

            </Col>
            <Col md={9}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: '5%'}}>
                    <div style={{width: '70vw', height: '70vh', backgroundColor: 'white'}}>
                        <VictoryChart
                            domainPadding={20}
                            theme={VictoryTheme.grayscale}
                        >
                            <VictoryAxis

                            />
                            <VictoryAxis
                                dependentAxis
                            />
                            <VictoryStack
                                colorScale={"warm"}
                            >
                                <VictoryBar
                                    data={brains}
                                    x={"name"}
                                    y={"popularity"}
                                />
                            </VictoryStack>
                        </VictoryChart>
                    </div>
                </div>
            </Col>
        </Row>

    );
})

export default PopularityBrains;