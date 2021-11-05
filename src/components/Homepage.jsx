import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Title } = Typography;

export const Homepage = () => {
    // this is a hook
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    console.log(data);

    if (isFetching) return "Loading...";
    

    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>

                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>

        </>
    )
}

export default Homepage