import React from 'react';
import Hero from '../components/Hero';
import Craft from '../components/Craft';
import Why from '../components/Why';
import Help from '../components/Help';
import Three from '../components/Three';
import Testimonial from '../components/Testimonial';
import Recent from '../components/Recent';
import Layout from '../layouts/Layout';

const HomePage = () => {
  return (
    <Layout>
		<Hero />
		<Craft />
		<Why />
		<Help />
		<Three />
		<Testimonial />
		<Recent />      
    </Layout>
  );
};

export default HomePage;