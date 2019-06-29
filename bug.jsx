import React from 'react'
import { css } from '@brandonkal/linaria'
import { styled } from '@brandonkal/linaria/react'

export const Duplicate = css`
  color: red;
  color: red;
`
export const inputPrefix = css`
  color: rgba(0, 0, 0, 0.65);
  background: red;
  color: rgba(0, 0, 0, 0.65);
`
export const inputSuffix = styled.div`
  top: 50%;
  top: 50%;
`

// If the contents below are commented out, errors will be reported
let a = <div />
function Input() {
  return <div />
}
