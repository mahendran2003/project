import React, { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import {  Routes,Route,useNavigate } from 'react-router-dom';
// import HomePage from '../Home/home';
// import './login.css';
const Login = ({ onLogin }) => {
  const url = 'http://localhost:3001/users';
  const [formData, setFormData] = useState({
    usrname: '',
    pass: '',
  });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(url).then((response) => {
      setItems(response.data);
    });