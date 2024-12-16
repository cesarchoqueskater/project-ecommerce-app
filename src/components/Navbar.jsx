import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import CardWidget from './CardWidget'

const pages = ['Mochica', 'Nazca', 'Wiru'];


function Navbar() {

  return (
    <nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Maytu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {
              pages.map((page) => (
                <li class="nav-item">
                  <a class="nav-link" href="#">{page}</a>
                </li>
              ))}
          </ul>
          <button type="button" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg> <span class="badge text-bg-secondary">4</span>
          </button>
        </div>
      </div>
    </nav>

  );
}
export default Navbar;
