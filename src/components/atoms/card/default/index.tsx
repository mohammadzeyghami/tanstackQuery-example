import React from 'react'
import { Card as AntCard, CardProps } from 'antd'

const Card = ({ ...rest }: CardProps) => {
  return <AntCard {...rest}>Card</AntCard>
}

export { Card }
