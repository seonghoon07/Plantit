"use client"

import React from "react";

const createFlexStyle = (styles: React.CSSProperties) => {
  return { ...styles };
};

export const flex = {
  FLEX: createFlexStyle({
    display: 'flex',
  }),
  CENTER: createFlexStyle({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  VERTICAL: createFlexStyle({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  HORIZONTAL: createFlexStyle({
    display: 'flex',
    justifyContent: 'center',
  }),
  START: createFlexStyle({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }),
  BETWEEN: createFlexStyle({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  END: createFlexStyle({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
  COLUMN_FLEX: createFlexStyle({
    display: 'flex',
    flexDirection: 'column',
  }),
  COLUMN_CENTER: createFlexStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
};