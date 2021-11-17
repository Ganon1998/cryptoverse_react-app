import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';


const { Title } = Typography;

export const Homepage = () => {
    // this is a hook
    const { data, isFetching } = useGetCryptosQuery();
    //const globalStats = data?.data?.stats;

    console.log(data);

    //if (isFetching) return "Loading...";
    //{millify(data?.data?.stats.totalMarketCap)}

    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={data?.data?.totalCoins}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
                <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cyrptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <news simplified/>

        </>
    )
}

export default Homepage