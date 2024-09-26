import React, { useState, useEffect } from 'react';
import { Navbar, Avatar,Button } from 'flowbite-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  

  return (
    <Navbar className="bg-white dark:bg-gray-800 shadow-lg px-4 py-2 md:px-8 dark:border-gray-700 transition-colors duration-300 ease-in-out">
      <Navbar.Brand href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Chatter
      </Navbar.Brand>
      <div className="flex items-center space-x-4">
       
        <Avatar
          img="https://imgs.search.brave.com/PixY8_zgl8cU1m2y47bf0V-2jOluOmEHOR4564ScsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
          rounded={true}
          bordered={true}
          className="w-10 h-10"
        />
        <NavLink to='/sign-in' >
         <Button 
          gradientDuoTone='greenToBlue'
          className="text-white dark:text-gray-100 focus:outline-none"
        >
        Sign In 
        </Button>
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
