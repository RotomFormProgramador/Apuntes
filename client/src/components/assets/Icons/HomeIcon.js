import React from 'react'
import {SvgIcon} from "@material-ui/core"


export default function MenuIcon(props) {
    return (
      <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/>
      </SvgIcon>
    );
  }